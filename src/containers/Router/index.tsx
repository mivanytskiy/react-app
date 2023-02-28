import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp'
import { Dashboard } from '../Dashboard';
 
export const Router: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/sign_in",
            element: <SignIn />,
        },
        {
            path: "/sign_up",
            element: <SignUp />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};