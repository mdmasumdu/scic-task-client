/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";


const Navbar = () => {

    const links =<>
    <NavLink to={"/"}>Home</NavLink>
 
    <NavLink to={"/contact"}>Contact</NavLink>
    <NavLink to={"/dashboard/task"}>Let's Explore</NavLink>
 
    </>

    const {user,logout}=useAuth();

    const signouta=()=>{
      logout()
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

    }
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">SCC Technovision Inc</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-5 text-xl font-bold">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
      
      user ?<div className="flex justify-center gap-1">  <button onClick={signouta} className="text xl btn">Logout</button> <div className="avatar">
      <div className="w-12 rounded">
        <img src={user.photoURL} />
      </div>
    </div></div>  :  <Link to={"/register"} className="btn text-xl font-bold">Register</Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;