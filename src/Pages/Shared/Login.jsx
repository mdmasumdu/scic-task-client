import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import img1 from "../../assets/Google-logo.png"
import { useForm} from "react-hook-form"
import Swal from "sweetalert2";


const Login = () => {
  const navigate =useNavigate();
  const location= useLocation();

  const {googlelogin,login}=useAuth();
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data.email,data.password)
    login(data.email,data.password)
    .then(res=>{
      if(res.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "succesfully loged in",
          showConfirmButton: true,
          timer: 1500
        });
        location.state ? navigate(`${location?.state}`) : navigate("/");
      }
    })
    .catch(err=>console.log(err))

  }

  const handlegoogle=()=>{
    googlelogin()
    .then(res=>{
      if(res?.user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "succesfully loged in",
          showConfirmButton: true,
          timer: 1500
        });
          location.state ? navigate(`${location?.state}`) : navigate("/");
      }
    })
    .catch(err=>console.log(err))

  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">A task management website is a digital platform that helps users organize, assign, and track tasks efficiently. With features like to-do lists and calendars, it streamlines project management, promotes collaboration, and enhances productivity by providing a centralized hub for task-related activities.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password")} className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <div>
        <h1 className="text-center">Or sign in with</h1>
        <figure onClick={handlegoogle} className="bg-slate-200 p-1 w-24 mx-auto rounded-2xl m-2">
        <img className="w-16 mx-auto" src={img1} alt="" />
        </figure>
      </div>
          </div>
        </div>
      </div>
    );
};

export default Login;