import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleLogout = () => {
        try {
            logOut();
            Swal.fire({
                title: 'log out successfull!',
                text: 'have a good day',
                icon: 'success'
            });
            // If you are using react-toastify for toasts
            // toast.success('Sign out successful');
        } catch (error) {
            console.error(error);
        }
    };
    const link = <>
        <li className="font-bold"><Link to="/"> Home</Link></li>
        <li className="font-bold"><Link to="/community"> Community</Link></li>
        <li className="font-bold"><Link to="/aboutus">About Us</Link></li>
        <li className="font-bold"><Link to="/contactus">Contact Us</Link></li>

    </>
    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    return (
        <div className="w-[600px]">
            <div className="navbar fixed z-10 bg-opacity-50 bg-slate-300 lg:w-[90%] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-16" src="https://i.ibb.co/kDfGMcG/depositphotos-93965950-stock-illustration-bangladesh-travel-company-logo.jpg" alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                {user && (
                        <div className=" mr-4">
                            <button onClick={toggleProfileDropdown} >
                                <img className="w-14 h-12 rounded-full mt-1" src={user.photoURL} alt="User Profile" />
                            </button>
                            {showProfileDropdown && (
                                <ul className="menu dropdown-content bg-base-100 rounded-box mt-2 absolute">
                                    <li className="menu-title">
                                      <Link to="/dashbord/wellcome" ><span className="text-primary btn">Dashboard</span></Link>  
                                    </li>
                                    <div>
                                    <div>
                                        <span>{user.displayName}</span>
                                    </div>
                                    <div>
                                        <span>{user.email}</span>
                                    </div>
                                    </div>
                                </ul>
                            )}
                        </div>
                    )}
                    {
                        user ?
                            <button onClick={handleLogout} className="btn btn-sm btn-secondary">log out</button>
                            :

                            <Link to="/signin"><button className="btn btn-sm btn-secondary ">log in</button></Link>

                    }
                    {/* <Link to="/register" className="btn btn-secondary">Register</Link> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;