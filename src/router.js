import { createBrowserRouter } from "react-router-dom";


import Root from './routes/Root';
import MainError from './ErrorPage/MainError'
import MainBlog from "./routes/MainBlog/MainBlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <MainError />,
    },
    {
        path: "test/",
        element: <MainBlog />,
    }
]);

export default router