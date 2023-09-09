import React from 'react';
import {useUnit} from 'effector-react';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import clsx from 'clsx';
import {Notification} from './Notification';
import {NotificationPositions} from '../lib';
import {$notificationList, $notificationsPosition} from '../model';

const positions: Record<NotificationPositions, string> = {
    top: 'top-0 right-0 left-0 items-center',
    'top-right': 'top-0 right-0 items-end',
    'top-left': 'top-0 left-0 items-start',
    bottom: 'bottom-0 right-0 left-0 items-center',
    'bottom-right': 'bottom-0 right-0 items-end',
    'bottom-left': 'bottom-0 left-0 items-start',
};

interface NotificationHub {
    className?: string;
}

export const NotificationHub = ({className}: NotificationHub) => {
    const position = useUnit($notificationsPosition);
    const notifications = useUnit($notificationList);
    return (
        <div
            className={clsx(
                'flex flex-col space-y-3 z-[1000] duration-500',
                positions[position],
                className,
            )}
        >
            {notifications.map((notification) => (
                <Notification
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </div>
    );
};
