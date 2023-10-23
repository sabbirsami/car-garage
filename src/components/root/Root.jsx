import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <div className="mx-auto  max-w-7xl">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
