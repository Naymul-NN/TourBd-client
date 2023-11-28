import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-center text-2xl text-lime-500 py-7">That is Admin profile</h1>
            <div className="flex gap-8 justify-start items-center">
            <div>
                
                <img className="w-96 rounded-3xl" src={user?.photoURL} alt="" />
            </div>
            <div>
                <h1> <strong>Name :</strong> {user?.displayName} </h1>
                <h1> <strong>Email:</strong> {user?.email} </h1>
            </div>
        </div>
        </div>
    );
};

export default AdminHome;