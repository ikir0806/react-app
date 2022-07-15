import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface PublicRouteProps {
    component?: JSX.Element;
}

export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
    return component ? component : <Outlet />;
};