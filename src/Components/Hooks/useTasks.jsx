import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTasks = () => {
    const {user}=useAuth();
    const axiosSecure =useAxiosSecure();

    const {refetch,data:tasks=[]}=useQuery({
        queryKey:["tasks",user.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/tasks/${user?.email}`)
            return res.data
        }
    })
    return [tasks,refetch]
};

export default useTasks;