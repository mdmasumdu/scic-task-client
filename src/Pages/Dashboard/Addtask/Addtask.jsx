import { useForm } from "react-hook-form";


const Addtask = () => {

    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = (data) =>{
        const taskinfo ={
          title:data.title,
          status:data.status,
          deadline:data.deadline,
          description:data.description

        }


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
          <input type="text" placeholder="name" {...register('title')} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select className=" p-1 border" {...register("status")}>
        <option value="To DO">To DO</option>
        <option value="Ongoing">Ongoing</option>
        <option value="Complted">Completed</option>
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
