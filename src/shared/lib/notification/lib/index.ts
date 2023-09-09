export type NotificationType = 'error';

export const DEFAULT_NOTIFICATION_TYPE: NotificationType = 'error';
export const DEFAULT_NOTIFICATION_TITLE = 'Notification';
export const DEFAULT_NOTIFICATION_DURATION = 5000;

export type NotificationPositions =
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left';

export interface Notification {
    id: string;
    message: string;
    title?: string;
    type?: NotificationType;
    autoHideDuration?: number;
}

export interface NotificationBody {
    message: string;
    title?: string;
    type?: NotificationType;
    autoHideDuration?: number;
}

export const createNotificationBody = ({
    type,
    title,
    message,
    autoHideDuration,
}: NotificationBody): NotificationBody => ({
    type,
    title,
    message,
    autoHideDuration,
});
