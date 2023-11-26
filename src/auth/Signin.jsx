import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


const Signin = () => {

    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const {googleLogin, userLogin} = useContext(AuthContext);
    const [loginError,setLoginError]= useState("");
    const provider = new GoogleAuthProvider();


    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value ;
    
        setLoginError("");
         userLogin(email,password)
         .then(result =>{
          console.log(result.user)
        //   toast.success('log in successfull')
          navigate(location?.state ? location.state: "/")
         })
         .catch(error=>{
          console.error(error)
          setLoginError("opps...! Invalid email or password")
         })
    
    }
    
       const handlegooleLogIn=()=>{
          googleLogin(provider)
          .then(result => {
            console.log(result.user)
            // toast.success("good job ! log in successfull ")
            navigate(location?.state ? location.state: "/")
          })
          .catch(error =>{
            console.error(error)
          })
    
       }

    return (
        <div>
              <div className="hero min-h-[500px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-red-500 font-bold">{loginError}</p>
        <button onClick={handlegooleLogIn} className="btn">Go with google</button>
      </form>
      <p>If you are new here! <Link to='/register' className="text-green-400 font-bold" >Register</Link></p>
    </div>
  </div>
             </div>
        </div>
    );
};

export default Signin;