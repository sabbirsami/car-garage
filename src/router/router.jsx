import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
            },
        ],
    },
]);
export default router;
