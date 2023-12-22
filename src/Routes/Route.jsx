import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Register from "../Pages/Shared/Register";
import Login from "../Pages/Shared/Login";
import Mainlayout from "../Layout/Mainlayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Addtask from "../Pages/Dashboard/Addtask/Addtask";
import Task from "../Pages/Dashboard/Task/Task";
import Private from "./Private";

const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>

            },
            {
                path:"/dashboard",
                element:<Private><Dashboard></Dashboard></Private>,
                children:[
                    {
                        path:"addtask",
                        element:<Addtask></Addtask>
                    },
                    {
                        path:"task",
                        element:<Task></Task>
                    }
                ]
            }
        ]
    }
])

export default mycreatedroute;