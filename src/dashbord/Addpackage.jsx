

const Addpackage = () => {
    return (
        <div>
            <h1 className="text-2xl text-center text-lime-500 ">Admin can add package from here</h1>
            <div>
            <form  className="text-2xl font-bold text-green-400">
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Turist Name</span>
                            </label>
                            <label className="input-group">
                                <span>name</span>
                                <input type="text" name="name" 
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Turist email</span>
                            </label>
                            <label className="input-group">
                                <span>email</span>
                                <input type="text"  name="Pname"
                                    className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                    <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Turist email</span>
                            </label>
                            <label className="input-group">
                                <span>email</span>
                                <input type="text"  name="Pname"
                                    className="input input-bordered w-full"  />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>$USD</span>
                                <input type="text"  name="price" className="input input-bordered w-full" readOnly />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tour taking date</span>
                            </label>
                            <label className="input-group">
                                <span>date</span>
                                <input type="date" placeholder="give a data " name="date" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instruction</span>
                            </label>
                            <label className="input-group">
                                <span>info</span>
                                <input type="text" placeholder="Address" name="info" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Turist photo</span>
                        </label>
                        <label className="input-group">
                            <span>photo</span>
                            <input type="text"  name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="add package" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default Addpackage;