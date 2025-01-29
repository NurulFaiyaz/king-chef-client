import { Outlet } from "react-router-dom";
import Sidebar from "./UserSidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-3/12">
                <Sidebar></Sidebar>
            </div>
            <div className="w-9/12 px-10 bg-slate-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;