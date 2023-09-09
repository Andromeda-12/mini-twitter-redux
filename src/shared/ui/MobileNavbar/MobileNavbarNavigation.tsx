import React from 'react';
import {RouteInstance, RouteParams} from 'atomic-router';
import {IconNames} from '@/shared/ui';
import {MobileNavbarNavigationItem} from './MobileNavbarNavigationItem';

export interface MobileNavbarNavigationItem {
    route: RouteInstance<any>;
    params?: RouteParams;
    iconName: IconNames;
    text: string;
}

interface MobileNavbarNavigationProps {
    items: MobileNavbarNavigationItem[];
}

export const MobileNavbarNavigation = ({
    items,
}: MobileNavbarNavigationProps) => (
    <ul className="px-[16px] space-y-[16px]">
        {items.map(({route, params, iconName, text}, index) => (
            <MobileNavbarNavigationItem
                route={route}
                params={params}
                text={text}
                iconName={iconName}
                key={`nav-item-${index}`}
            />
        ))}
    </ul>
);
