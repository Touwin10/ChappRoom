import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <div className="MainLayout">
            <Outlet />
        </div>
    );
};

export default MainLayout;