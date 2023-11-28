import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
const Wishlist = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiospublic();
    const { isFetching, data, refetch } = useQuery({
        queryKey: [user?.email, 'wishlist'],
        queryFn: () =>
            axiosPublic.get(`/wishlist/${user?.email}`).then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }

    // delete
    const handledelete = (id) => {
        axiosPublic.delete(`/wishlist/${id}`)
        .then((response) => {
            // Handle success, e.g., update the UI or refetch the data
            console.log("Item deleted successfully", response);
            if(response.data.deletedCount > 0){
                refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              }
            // You may want to trigger a refetch of the wishlist data here
        })
        .catch((error) => {
            // Handle error, e.g., show an error message
            console.error("Error deleting item", error);
        })
    }
    console.log(data)
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">See your Wishlist</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TourType</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.tourType}</td>
                                <td>{item.price} $</td>
                                <td><Link to={`/viewpackage/${item.id}`}>details</Link></td>
                               <td><button onClick={()=> handledelete(item._id)}><AiFillDelete></AiFillDelete></button></td>
   
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;