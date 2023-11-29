import Swal from "sweetalert2";
import useAxiospublic from "../hooks/useAxiospublic";


const Addpackage = () => {
    const axiosPublic = useAxiospublic();
    const handlepost = (e) => {
        e.preventDefault();
        const form = e.target;
        const tourType = form.type.value;
        const tourTitle = form.title.value
        const details = form.details.value
        const price = form.price.value
        const photo = form.photo.value
        const addedpackage = {tourType,tourTitle,details,price,photo}
        console.log(addedpackage);
          axiosPublic.post('/newpackage',addedpackage)
          .then(response => {
            console.log(response.data);
            if (response.data.insertedId) {
                Swal.fire({
                    title: "package added successfull",
                    text: "package added to your database!",
                    icon: "success"
                }); 
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h1 className="text-2xl text-center text-lime-500 ">Admin can add package from here</h1>
            <div>
                <form onSubmit={handlepost} className="text-2xl font-bold text-green-400">
                    {/* row of input */}
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> TourType</span>
                            </label>
                            <label className="input-group">
                                <span>type</span>
                                <select name="type" className="select select-bordered w-full">
                                    <option value="Adventure">Adventure</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Walking">Walking</option>
                                    <option value="boating">boating</option>
                                    <option value="flying">flying</option>
                                    
                                </select>
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">TourTitle</span>
                            </label>
                            <label className="input-group">
                                <span>title</span>
                                <input type="text" placeholder="give title" name="title"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="grid lg:flex lg:gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tour details</span>
                            </label>
                            <label className="input-group">
                                <span>details</span>
                                <input type="text" placeholder="details" name="details"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>$USD</span>
                                <input type="text" placeholder="price" name="price" className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Place pic</span>
                        </label>
                        <label className="input-group">
                            <span>photo</span>
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input type="submit" value="add package" className="btn btn-block mt-6" id="" />
                </form>
            </div>
        </div>
    );
};

export default Addpackage;