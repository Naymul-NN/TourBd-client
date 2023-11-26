import { useQuery } from "@tanstack/react-query";

import { FaHeart } from "react-icons/fa";
import useAxiospublic from "../hooks/useAxiospublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const TabTour = () => {
    const axiosPublic = useAxiospublic();
    const { isFetching, data, } = useQuery({
        queryKey: ['tabTour'],
        queryFn: () =>
            axiosPublic.get('/tabTour').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }

    const handleWishList = (item) => {
        const wishItem = {
            photo: item.photo,
            tourType: item.tourType,
            tripTitle: item.tripTitle,
            price: item.price,
        }
        console.log(wishItem)
        axiosPublic.post('/wishlist', wishItem)
            .then((response) => {
                // Handle the response if needed
                console.log('Wish item added successfully:', response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        title: "see your wishlist!",
                        text: "package added to your dashbord!",
                        icon: "success"
                    });
                }
            })
            .catch((error) => {
                // Handle the error if the request fails
                console.error('Error adding wish item:', error);
            });
    }
    // console.log(data);
    return (
        <div>
            <div className=" flex flex-col items-center gap-6">
                {
                    data.map(item => (
                        <div key={item._id} className="card w-[700px] bg-base-100 shadow-xl ">
                            <figure ><img src={item.photo} alt="Shoes" />
                                <button onClick={() => handleWishList(item)} className="absolute top-0 right-0 m-4">
                                    <FaHeart className="text-red-600 text-4xl" />
                                </button>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Tour type : {item.tourType}</h2>
                                <p className="text-start">{item.tripTitle}</p>
                                <div className="card-actions ">
                                    <Link to={`/viewpackage/${item._id}`}>  
                                       <button className="btn btn-secondary">View Package</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <button className="btn btn-secondary my-4">ALL PACKGES</button>
        </div>
    );
};

export default TabTour;