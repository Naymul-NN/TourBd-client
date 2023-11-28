import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
           <div className="flex gap-8 justify-start items-center">
            <div>
                
                <img className="w-96 rounded-3xl" src={user.photoURL} alt="" />
            </div>
            <div>
                <h1> <strong>Name :</strong> {user.displayName} </h1>
                <h1> <strong>Email:</strong> {user.email} </h1>
            </div>
           </div>
           <h1 className="text-center text-2xl py-8 border-b-2 ">Add your story here</h1>
           <div>
           <textarea className="textarea textarea-bordered w-full h-60" placeholder="write your story"></textarea>
           <button className="btn btn-secondary my-5">Submit</button>
           </div>
        </div>
    );
};

export default UserHome;