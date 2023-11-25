import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {FaHeart } from "react-icons/fa";


const TabTour = () => {
    const { isFetching, data, } = useQuery({
        queryKey: ['tabTour'],
        queryFn: () =>
            axios.get('http://localhost:5000/tabTour').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }


    // console.log(data);
    return (
        <div>
            <div className=" flex flex-col items-center gap-6">
                {
                    data.map(item => (
                        <div key={item._id} className="card w-[700px] bg-base-100 shadow-xl ">
                            <figure ><img src={item.photo} alt="Shoes" />
                                <button  className="absolute top-0 right-0 m-4">
                                    <FaHeart className="text-red-600 text-4xl" />
                                </button>
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">Tour type : {item.tourType}</h2>
                                <p className="text-start">{item.tripTitle}</p>
                                <div className="card-actions ">
                                    <button className="btn btn-ghost">View Package</button>
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