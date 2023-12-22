
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useTasks from "../../../Components/Hooks/useTasks";
import { Link } from "react-router-dom";


const Task = () => {
    const [tasks,refetch]=useTasks();
    const todotaks =tasks.filter(task=>task.status === "todo");
    const ongoingtaks =tasks.filter(task=>task.status === "ongoing");
    const completedtaks =tasks.filter(task=>task.status === "completed");
    const axiosSecure =useAxiosSecure();

    const markdown =(id,status)=>{
       const upadateinfo ={
            id,
            status
        }

        axiosSecure.patch("/task",upadateinfo)
        .then(res=>{
            if(res.data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `succfully changed stauts to ${status}`,
                    showConfirmButton: true,
                    timer: 1500
                  });
                     refetch();
            }
        })

    }
    const handledelete =(id)=>{
    axiosSecure.delete(`/task/${id}`)
    .then(res=>{
        if(res.data.deletedCount){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "succesfully deleted",
                showConfirmButton: true,
                timer: 1500
              });
            refetch();
        }
    })

    }



 
    return (
        <div>
            {/* to do section */}
            <h1 className="text-center p-1 rounded text-4xl bg-slate-200 mt-10 w-1/4 mx-auto mb-5">To DO</h1>
            <section className="min-h-96">

            {
                todotaks == ""  ? <div><p className="text-center font-bold text-green-500 text-4xl">you have no task to do</p></div> :<div>
                <div className="overflow-x-auto">
  <table className="table-xs md:table">
    {/* head */}
    <thead>
      <tr>
        <th>Seial</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        todotaks.map((task,idx)=><tr key={task._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.deadline}</td>
        <td>{task.priority}</td>
        <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"ongoing")}>Mark As Onging</button></td>
        <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"completed")}>Mark As Completed</button></td>
        <td><button className="btn bg-emerald-400" onClick={()=>handledelete(task._id)}>Delete</button></td>
        <td><Link to={`/dashboard/edit/${task._id}`}><button className="btn bg-emerald-400">Edit</button></Link></td>
      </tr>)
      }
  
    </tbody>
  </table>
</div>
                </div>
            }

            </section>
               
            






        

            {/* ongoing section */}

            <h1 className="text-center p-1 rounded text-4xl bg-slate-200 mt-10 w-1/4 mx-auto mb-5">On going</h1>

            <section className="min-h-96">
            {
                ongoingtaks == "" ? <div><p className="text-center font-bold text-green-500 text-4xl">you have no Onging task</p></div> : <div>
                <div className="overflow-x-auto">
  <table className="table-xs md:table">
    {/* head */}
    <thead>
      <tr>
        <th>Seial</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        ongoingtaks.map((task,idx)=><tr key={task._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.deadline}</td>
        <td>{task.priority}</td>
        <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"todo")}>Mark As TO DO</button></td>
        <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"completed")}>Mark As Completed</button></td>
        <td><button className="btn bg-emerald-400" onClick={()=>handledelete(task._id)}>Delete</button></td>
        <td><Link to={`/dashboard/edit/${task._id}`}><button className="btn bg-emerald-400">Edit</button></Link></td>
        
        
      </tr>)
      }
  
    </tbody>
  </table>
</div>
                </div>
            }


            </section>


            {/* completed section */}

            <h1 className="text-center p-1 rounded text-4xl bg-slate-200 mt-10 w-1/4 mx-auto mb-5">Completed</h1>

            <section className="min-h-96">


                {
                    completedtaks == "" ?  <div><p className="text-center font-bold text-green-500 text-4xl">you have no completed tasks</p></div>: <div>
                    <div className="overflow-x-auto">
      <table className="table-xs md:table">
        {/* head */}
        <thead>
          <tr>
            <th>Seial</th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            completedtaks.map((task,idx)=><tr key={task._id} className="bg-base-200">
            <th>{idx+1}</th>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"ongoing")}>Mark As Onging</button></td>
            <td><button className="btn bg-emerald-400" onClick={()=>markdown(task._id,"todo")}>Mark AS TO DO</button></td>
            <td><button className="btn bg-emerald-400" onClick={()=>handledelete(task._id)}>Delete</button></td>
            <td><Link to={`/dashboard/edit/${task._id}`}><button className="btn bg-emerald-400">Edit</button></Link></td>
          </tr>)
          }
      
        </tbody>
      </table>
    </div>
                    </div>
    
                }

           
            </section>

            
        </div>
    );
};

export default Task;