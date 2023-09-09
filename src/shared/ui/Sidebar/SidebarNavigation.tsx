import React, {ReactNode} from 'react';
import {RouteInstance, RouteParams} from 'atomic-router';
import {SidebarNavigationItem} from './SidebarNavigationItem';
import {IconNames} from '../Icon';

export interface SidebarNavigationItem {
    route: RouteInstance<any>;
    params?: RouteParams;
    iconName: IconNames;
    text: string;
}

interface SidebarNavigationProps {
    items: SidebarNavigationItem[];
    isSidebarCollapsed: boolean;
}

export const SidebarNavigation = ({
    items,
    isSidebarCollapsed,
}: SidebarNavigationProps) => (
    <ul className="space-y-[4px] flex flex-col flex-1">
        {items.map(({route, params, iconName, text}, index) => (
            <SidebarNavigationItem
                route={route}
                params={params}
                text={text}
                iconName={iconName}
                isSidebarCollapsed={isSidebarCollapsed}
                key={`nav-item-${index}`}
            />
        ))}
    </ul>
);
