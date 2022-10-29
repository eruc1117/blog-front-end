import { createBrowserRouter } from "react-router-dom";


import Root from './routes/Root';
import MainError from './ErrorPage/MainError'
import MainBlog from "./routes/MainBlog/MainBlog";
import User from "./routes/User/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <MainError />,
    },
    {
        path: "test/",
        element: <MainBlog />,
    },
    {
        path: "user/",
        element: <User />,
    }
]);

export default router