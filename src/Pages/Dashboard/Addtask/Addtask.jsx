import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Components/Hooks/useAuth";


const Addtask = () => {
  const {user}=useAuth();
  const axiosSecure =useAxiosSecure();

    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = (data) =>{
        const taskinfo ={
          email:user?.email,
          title:data.title,
          status:"todo",
          deadline:data.deadline,
          description:data.description,
          priority:data.priority

        }
        axiosSecure.post("/tasks",taskinfo)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your task has been added",
              showConfirmButton: true,
              timer: 1500
            });
          }
        })
      

        console.log(taskinfo)

      }

    return (
        <div>
           <h1 className="text-center font-bold text-4xl m-10 bg-slate-200 p-3 w-2/4 mx-auto">Add your task</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="card-body">

           <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="task title" {...register('title')} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select {...register("priority")} className="select select-bordered ">
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
          <input type="date" placeholder="email" {...register('deadline')} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" {...register("description")} className="input input-bordered" required />
        </div>
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add task</button>
        </div>
      </form>
        </div>
    );
};

export default Addtask;
