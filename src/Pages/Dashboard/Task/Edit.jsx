import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const Edit = () => {

    const datas =useLoaderData();
    const {user}=useAuth();
const axiosSecure =useAxiosSecure();
const navigate =useNavigate()


    
    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = (data) =>{

        const updatetaskinfo ={
           id:datas?._id, 
          email:user?.email,
          title:data.title,
          status:data.status,
          deadline:data.deadline,
          description:data.description,
          priority:data.priority

        }
    axiosSecure.put("/task",updatetaskinfo)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task has been updated",
                showConfirmButton: true,
                timer: 1500
              });
              navigate("/dashboard/task")

              
        }
    })

    
    }

    return (
        <div>
           <h1 className="text-center font-bold text-4xl m-10 bg-slate-200 p-3 w-2/4 mx-auto">Update your task</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="card-body">

           <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="task title" defaultValue={datas.title} {...register('title')} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select selected={datas.priority} {...register("priority")} required className="select select-bordered ">
  <option  disabled selected>Select Priority</option>
  <option value={"Low"}>Low</option>
  <option value={"Moderate"}>Moderate</option>
  <option value={"High"}>High</option>
</select>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" defaultValue={datas.deadline} placeholder="email" {...register('deadline')} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" defaultValue={datas.description} {...register("description")} className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update the task</button>
        </div>
      </form>
        </div>
    );
};

export default Edit;