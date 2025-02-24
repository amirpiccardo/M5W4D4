
import { createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Detail from "./page/detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/detail/:id",
        element: <Detail />
    },
    {
        path: "*",
        element: <>404. Not Found...</>
    }
]);


export {router};