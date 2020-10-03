import React from 'react';

import MainLayout from "./layouts/MainLayout";
import ChatRoomLayout from './layouts/ChatroomLayout';
import Chatroom from './views/Chatroom';
import Profile from './views/Profile';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Settings from './views/Settings';
import Contact from './views/Contact';
import Home from './views/Home';


const routes = [
    {
        path: "room",
        exact: true,
        element: <ChatRoomLayout />,
        children: [
            { path: "", element: <Chatroom /> },
            { path: "settings", element: <Settings /> },
            { path: "contacts", element: <Contact /> },
            { path: "profile", element: <Profile /> },
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ]
    }

];

export default routes;