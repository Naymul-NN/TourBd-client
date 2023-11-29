import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


const AssignTour = () => {
   
    const axiosPublic = useAxiospublic();
    const { isFetching, data, error } = useQuery({
        queryKey: ['userBooking', ],
        queryFn: () =>
            axiosPublic.get('/userBooking').then((res) => res.data),
    });
    if (error) {
        console.error("Error fetching user bookings:", error);
        return <p>Error loading data</p>;
    }

    if (isFetching) {
        return <p>Loading...</p>;
    }
    console.log(data)
    return (
        <div>
            <div>
            <h1 className="text-center font-semibold text-2xl py-5">Assign Tour list</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TourType</th>
                            <th>Tourist Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.tourType}</td>
                                <td>{item.touristName}</td>
                                <td>{item.date}</td>
                                <td>{item.price} $</td>
                                <td><button className="text-green-500 btn btn-sm"><FaCheck></FaCheck></button> <button className="ml-7 text-red-500 btn btn-sm"> <MdCancel /></button></td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default AssignTour;