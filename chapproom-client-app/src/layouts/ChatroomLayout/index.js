import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isConnected } from '../../helpers';
import "./ChatRoom.scss";
import TopBar from './TopBar';

const ChatRoomLayout = () => {
    return (
        !isConnected() ? (
            <Navigate to="/login" />
        ) : (
                <div className="ChatRoomLayout">
                    <div className="top">
                        <TopBar />
                    </div>
                    <div className="center">
                        <Outlet />
                    </div>
                </div>
            )

    );
};

export default ChatRoomLayout;