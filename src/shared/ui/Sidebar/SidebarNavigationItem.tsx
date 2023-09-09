import React, {ReactNode} from 'react';
import {useUnit} from 'effector-react';
import {RouteInstance, RouteParams} from 'atomic-router';
import {Link} from 'atomic-router-react';
import {SidebarNavigationItemContainer} from './SidebarNavigationItemContainer';
import {Icon, IconNames} from '../Icon';

interface SidebarNavigationItemProps {
    route: RouteInstance<any>;
    params?: RouteParams;
    text: string;
    iconName: IconNames;
    isSidebarCollapsed: boolean;
}

const SidebarNavigationItemWithLink = ({
    route,
    params,
    children,
}: {
    children: ReactNode;
    route: RouteInstance<any>;
    params?: RouteParams;
}) => (
    <Link
        to={route}
        params={params}
        className="outline-none rounded-xl"
    >
        {children}
    </Link>
);

export const SidebarNavigationItem = ({
    route,
    params,
    text,
    iconName,
    isSidebarCollapsed,
}: SidebarNavigationItemProps) => {
    const isRouteActive = useUnit(route.$isOpened);

    return (
        <SidebarNavigationItemWithLink
            route={route}
            params={params}
        >
            <SidebarNavigationItemContainer isActive={isRouteActive}>
                <div>
                    <Icon iconName={iconName} />
                </div>
                {!isSidebarCollapsed && (
                    <span className="ml-[8px] whitespace-nowrap">{text}</span>
                )}
            </SidebarNavigationItemContainer>
        </SidebarNavigationItemWithLink>
    );
};
