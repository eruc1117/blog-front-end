import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';


// 如果把 NavBar 移到這裡？

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <RouterProvider router={router} />
    </div>
);
