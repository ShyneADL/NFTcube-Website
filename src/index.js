import React from 'react';
import App from './App'; 
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import SignPage from './pages/SignPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "sign",
        element: <SignPage/>,
      },
  ]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} />);