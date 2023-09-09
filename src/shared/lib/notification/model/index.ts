import {v4 as uuidv4} from 'uuid';
import {createEffect, createEvent, createStore, sample} from 'effector';
import {
    Notification,
    NotificationBody,
    NotificationPositions,
    DEFAULT_NOTIFICATION_DURATION,
    DEFAULT_NOTIFICATION_TITLE,
    DEFAULT_NOTIFICATION_TYPE,
} from '../lib';

export const createNotification = createEvent<NotificationBody>();
export const closeNotification = createEvent<string>();
const addNotification = createEvent<Notification>();
const removeNotification = createEvent<string>();

export const setNotificationsPosition = createEvent<NotificationPositions>();

const awaitNotificationDurationFx = createEffect(
    async (notification: Notification) => {
        await new Promise((res) => setTimeout(res, notification.autoHideDuration));
        return notification.id;
    },
);

export const $notificationList = createStore<Notification[]>([]);
export const $notificationsPosition = createStore<NotificationPositions>(
    'bottom-right',
).on(setNotificationsPosition, (_, position) => position);

sample({
    clock: createNotification,
    fn: (notificationBody) => {
        const notificationId = uuidv4();

        const notification: Notification = {
            id: notificationId,
            ...notificationBody,
        };

        if (!notification.type) {
            notification.type = DEFAULT_NOTIFICATION_TYPE;
        }

        if (!notification.title) {
            notification.title = DEFAULT_NOTIFICATION_TITLE;
        }

        if (!notification.autoHideDuration) {
            notification.autoHideDuration = DEFAULT_NOTIFICATION_DURATION;
        }

        return notification;
    },
    target: [addNotification, awaitNotificationDurationFx],
});

sample({
    clock: addNotification,
    source: $notificationList,
    fn: (notifications, notification) => [...notifications, notification],
    target: $notificationList,
});
sample({
    clock: removeNotification,
    source: $notificationList,
    fn: (notifications, id) => notifications.filter((notification) => notification.id !== id),
    target: $notificationList,
});

sample({
    clock: awaitNotificationDurationFx.doneData,
    source: $notificationList,
    filter: (nl, id) => !!nl.find((n) => n.id === id),
    fn: (_, id) => id,
    target: removeNotification,
});

sample({
    clock: closeNotification,
    target: removeNotification,
});
