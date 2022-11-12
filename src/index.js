import React from "react";
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Root from './routes/Root';
import MainError from './ErrorPage/MainError'
import MainBlog from "./routes/MainBlog/MainBlog";
import User from "./routes/User/User";
import Login from "./routes/Login/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Root/>} 
          errorElement={<MainError/>} />
      <Route path="/article/:articleId" element={<MainBlog/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  )
