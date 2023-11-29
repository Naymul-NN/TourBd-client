import { FaBook, FaCartPlus, FaHome, FaList, FaUtensils } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAmin from "../hooks/useAmin";
import useGuide from "../hooks/useGuide";

const Dashbord = () => {
    const [isAdmin] = useAmin();
    const [isguide] = useGuide();
   console.log(isguide,isAdmin);
    // const role = "user"
    return (
        <div className="w-[90%] mx-auto" >
            <h1 className="text-3xl text-center py-6">See your activity</h1>
            <div className="flex">
                <div className="w-64 min-h-screen bg-pink-300">
                    <ul className="menu">

                      { isAdmin? ( <>
                        <li> <NavLink to="/dashbord/adminHome">
                            <FaHome></FaHome>
                            My profile</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/addpackage">
                            <FaUtensils></FaUtensils>
                            Add package</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/manageusers">
                            <FaList></FaList>
                             Manage users</NavLink>
                       </li>
                       </>) : isguide? (
                            <>
                                {/* Guide links */}
                                <li>
                                    <NavLink to="/dashbord/guideHome">
                                        <FaHome></FaHome>
                                        Guide Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashbord/guideBookings">
                                        <FaBook></FaBook>
                                        Assign Tour
                                    </NavLink>
                                </li>
                                {/* ... (other guide links) ... */}
                            </>
                        )  : ( <>
                       
                       <li> <NavLink to="/dashbord/userHome">
                            <FaHome></FaHome>
                            My profile</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/userbookings">
                            <FaCartPlus></FaCartPlus>
                            My Bookings</NavLink>
                       </li>
                       <li> <NavLink to="/dashbord/userwishlist">
                            <FaHeart className="text-red-700"></FaHeart>
                            My Wishlist</NavLink>
                       </li>
                       </>)
                      }
                       <div className="divider"></div>
                       <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                       </li>
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;