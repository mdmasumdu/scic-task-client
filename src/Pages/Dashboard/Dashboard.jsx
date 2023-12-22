import { NavLink, Outlet } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { TbSubtask } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-[250px] bg-emerald-400 min-h-screen underline">
            <ul className="menu  m-5  space-y-3 font-bold">
                <NavLink to="/dashboard/addtask" className={"flex items-center"}><span><IoAddCircle></IoAddCircle></span> Add Task</NavLink>
                <NavLink to="/dashboard/task" className={"flex  items-center"}><span><TbSubtask></TbSubtask></span> Tasks</NavLink>
                <div className="divider"></div>
                <NavLink to="/" className={"flex  items-center"}><span><IoIosHome></IoIosHome></span> Home</NavLink>
                

            </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;