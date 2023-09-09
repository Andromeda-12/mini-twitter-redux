import {
    createNotification,
    closeNotification,
    $notificationList,
    $notificationsPosition,
} from './model';

import {createNotificationBody} from './lib';

export const notificationModel = {
    createNotification,
    createNotificationBody,
    closeNotification,
    $notificationList,
    $notificationsPosition,
};

export * from './ui';
