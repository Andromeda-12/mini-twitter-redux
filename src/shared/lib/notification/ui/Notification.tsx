import React from 'react';
import clsx from 'clsx';
import {Icon, IconNames} from '@/shared/ui';
import {
    DEFAULT_NOTIFICATION_TYPE,
    type Notification as NotificationType,
} from '../lib';

interface NotificationProps {
    notification: NotificationType;
}

const iconName: Record<string, IconNames> = {
    error: 'error',
};

export const Notification = ({notification}: NotificationProps) => {
    const {message, title, type: notificationType} = notification;
    const type = notificationType || DEFAULT_NOTIFICATION_TYPE;

    return (
        <div
            className={clsx(
                'p-[16px] text-base leading-[22px] flex rounded-xl w-full',
                type === 'error' && 'bg-red-light text-gray-dark',
            )}
        >
            <div>
                <Icon
                    iconName={iconName[type]}
                    className="text-red"
                />
            </div>

            <div className="w-full ml-[12px] flex flex-col md:block md:space-x-1">
                <span>
                    {title}
                    :
                </span>
                <span>
                    {message}
                </span>
            </div>
        </div>
    );
};
