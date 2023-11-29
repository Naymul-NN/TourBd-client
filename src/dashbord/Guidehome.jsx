import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link } from "react-router-dom";

const Guidehome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="flex flex-col gap-8 justify-start items-center py-5">
            <div>
                
                <img className="w-60 rounded-3xl" src={user?.photoURL} alt="" />
            </div>
            <div>
                <h1> <strong>Name :</strong> {user?.displayName} </h1>
                <h1> <strong>Email:</strong> {user?.email}</h1>
            </div>
           </div>
           <hr></hr>

           <h1 className="text-2xl py-5">Fill up the Form and Be a Tour Guide</h1>

           <div>
                <form className="text-2xl font-bold text-green-400">
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                           
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="name" name="title"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            
                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="email" name="title"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                           
                            <label className="input-group">
                                <span>Nationality</span>
                                <input type="text" placeholder="nationality" name="details"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="input-group">
                                <span>Languages</span>
                                <input type="text" placeholder="good at" name="price" className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>


                    <div className="form-control w-full">
                        <label className="input-group">
                            <span>Exprience</span>
                            <input type="text" placeholder="exprience" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group">
                            <span>About</span>
                            <textarea className="textarea textarea-bordered w-full h-[200px]" placeholder="Bio"></textarea>                        </label>
                    </div>

                  <Link> <button className="flex justify-center items-center btn btn-secondary">Publish</button></Link> 
                </form>
            </div>
        </div>
    );
};

export default Guidehome;