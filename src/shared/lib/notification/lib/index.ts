export type NotificationType = 'error';

export const DEFAULT_NOTIFICATION_TYPE: NotificationType = 'error';
export const DEFAULT_NOTIFICATION_TITLE = 'Notification';
export const DEFAULT_NOTIFICATION_DURATION = 5000;
export const DEFAULT_NOTIFICATIONS_POSITION: NotificationsPosition =
  'bottom-right';

export type NotificationsPosition =
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

export type NotificationBody = Omit<Notification, 'id'>;
