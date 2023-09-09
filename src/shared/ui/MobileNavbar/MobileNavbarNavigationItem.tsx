import React, {ReactNode} from 'react';
import {useUnit} from 'effector-react';
import {RouteInstance, RouteParams} from 'atomic-router';
import {Link} from 'atomic-router-react';
import {Icon, IconNames} from '@/shared/ui';
import {MobileNavbarNavigationItemContainer} from './MobileNavbarNavigationItemContainer';

interface MobileNavbarNavigationItemProps {
    route: RouteInstance<any>;
    params?: RouteParams;
    text: string;
    iconName: IconNames;
}

const MobileNavbarNavigationItemWithLink = ({
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
        className="outline-none rounded-xl block"
    >
        {children}
    </Link>
);

export const MobileNavbarNavigationItem = ({
    route,
    params,
    text,
    iconName,
}: MobileNavbarNavigationItemProps) => {
    const isRouteActive = useUnit(route.$isOpened);

    return (
        <MobileNavbarNavigationItemWithLink
            route={route}
            params={params}
        >
            <MobileNavbarNavigationItemContainer isActive={isRouteActive}>
                <Icon iconName={iconName} />
                <span className="ml-[8px]">{text}</span>
            </MobileNavbarNavigationItemContainer>
        </MobileNavbarNavigationItemWithLink>
    );
};
