import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //validation
    setError('');
    if (password.length < 6) {
      setError("error ! your password at lest 6 character")
      return;

    } else if (!/[A-Z]/.test(password)) {
      setError('error ! provide a uppercase latter')
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setError('please ! provide a sepcial character')
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update the user's profile with name and photoUrl
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log('User profile updated successfully.');
            console.log(user);
            // toast.success('Congratulations! Registration successful');
            navigate('/');
          })
          .catch((error) => {
            console.error('Error updating user profile:', error);
            // Handle the error as needed
          });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        // Handle the error as needed
      });
  };

    return (
        <div className="pt-20">
            <div className="hero min-h-[400px] bg-pink-50">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0   shadow-2xl bg-green-50">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
              </div>

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
                <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                <span onClick={() => setshow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
              <p className="text-red-500 font-bold">{error}</p>
            </form>
            <p>if you have alrady an account !<Link to='/signin' className="text-green-500 font-bold"> login</Link></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;