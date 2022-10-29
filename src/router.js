import { createBrowserRouter } from "react-router-dom";


import Root from './routes/Root';
import MainError from './ErrorPage/MainError'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <MainError />,
    },
]);

export default router