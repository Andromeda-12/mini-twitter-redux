import { v4 as uuidv4 } from 'uuid';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  Notification,
  NotificationBody,
  NotificationsPosition,
  DEFAULT_NOTIFICATION_DURATION,
  DEFAULT_NOTIFICATION_TITLE,
  DEFAULT_NOTIFICATION_TYPE,
  DEFAULT_NOTIFICATIONS_POSITION,
} from '../lib';
import { notificationMiddleware } from '../lib/middleware';
import { useTypedSelector } from '../..';

interface NotificationsState {
  notifications: Notification[];
  notificationsPosition: NotificationsPosition;
}

const initialState: NotificationsState = {
  notifications: [],
  notificationsPosition: DEFAULT_NOTIFICATIONS_POSITION,
};

const createNotification = (
  notificationBody: NotificationBody
): Notification => ({
  id: uuidv4(),
  title: notificationBody.title || DEFAULT_NOTIFICATION_TITLE,
  type: notificationBody.type || DEFAULT_NOTIFICATION_TYPE,
  autoHideDuration:
    notificationBody.autoHideDuration || DEFAULT_NOTIFICATION_DURATION,
  message: notificationBody.message,
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationBody>) => {
      const notificationBody = action.payload;

      const notification = createNotification(notificationBody);

      state.notifications.push(notification);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    setNotificationPosition: (
      state,
      action: PayloadAction<NotificationsPosition>
    ) => {
      state.notificationsPosition = action.payload;
    },
  },
});

const useNotifications = () =>
  useTypedSelector(state => state.notifications.notifications);
const useNotificationsPosition = () =>
  useTypedSelector(state => state.notifications.notificationsPosition);

export const notificationModel = {
  ...notificationsSlice,
  selectors: {
    useNotifications,
    useNotificationsPosition,
  },
  notificationMiddleware,
};
