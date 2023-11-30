import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";

const UserBookings = () => {
    const {user}= useContext(AuthContext);
    // console.log(user)
    const axiosPublic = useAxiospublic();
    const { isFetching, data, error } = useQuery({
        queryKey: [user?.email,'userBooking', ],
        queryFn: () =>
            axiosPublic.get(`/userBooking/${user?.email}`).then((res) => res.data),
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
            <h1 className="text-center font-semibold text-2xl py-5">Booking list</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>TourType</th>
                            <th>Guide</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.tourType}</td>
                                <td>{item.guideName}</td>
                                <td>{item.date}</td>
                                <td>{item.price} $</td>
                                <td>{
                                    item?.status ? (item?.status) : 'in review'
                                    }</td>
                                <td><button className=" btn pay"
                                disabled={item.status==="rejected"}
                                >pay</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserBookings;