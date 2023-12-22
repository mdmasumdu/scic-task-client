import { useForm} from "react-hook-form"
import img from "../../assets/4934425-removebg-preview.png"
import img1 from "../../assets/Google-logo.png"
import useAuth from "../../Components/Hooks/useAuth";

const Register = () => {

  const {googlelogin,registera,updateprofilea}=useAuth();

  const handlegoogle=()=>{
    googlelogin()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))

  }

 
    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = (data) =>{


        registera(data.email,data.password)
        .then(res=>{
        
          if(res.user){
            updateprofilea(data.name,data.photourl)
            console.log(res.user)
          }
        })
        .catch(err=>console.log(err))


      }
    return (
        <div>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className="text-center flex-1">
  
      
      <img className="mx-auto mt-10" src={img} alt="" />
    </div>

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1 justify-end">
    <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" {...register('name')} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password")} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="PhotoURL" {...register("photourl")} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
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
        </div>
    );
};

export default Register;