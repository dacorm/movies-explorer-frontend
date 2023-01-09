import React from 'react';
import { Navigate } from 'react-router-dom';

export interface ProtectedRouteProps {
    Component: React.FC;
    isLoggedIn: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component, isLoggedIn, ...props }) => (isLoggedIn ? (
    <Component {...props} />
) : (
    <Navigate to="/sign-in" />
));

export default ProtectedRoute;
