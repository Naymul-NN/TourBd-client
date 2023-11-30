import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";


const AssignTour = () => {
   
    const axiosPublic = useAxiospublic();
    const { isFetching, data, error,refetch } = useQuery({
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
//   accept package
     const handleAcceptpackage= (booking) =>{
         axiosPublic.patch(`/booking/accept/${booking._id}`)
          .then(res =>{
           console.log(res.data)
           if(res.data.modifiedCount > 0){
             refetch();
              Swal.fire({
               position: "top-end",
               icon:'success',
               title:'package accept successfully',
               showCancelButton:false,
               timer:1500,
              })
           }
          })
       } 
    //    reject the package
    const handlerejectpackage= (booking) =>{
        axiosPublic.patch(`/booking/reject/${booking._id}`)
         .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
             Swal.fire({
              position: "top-end",
              icon:'success',
              title:'package reject successfull',
              showCancelButton:false,
              timer:1500,
             })
          }
         })
      } 

    // console.log(data)
    return (
        <div>
            <div>
            <h1 className="text-center font-semibold text-2xl py-5">Assign Tour list</h1>
            <div className="overflow-x-auto">
                <table className="table ">
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
                                <td><button onClick={()=>handleAcceptpackage(item)} className="text-green-500 btn btn-sm"
                                disabled={item?.status==='accept' || item?.status==='rejected'}
                                ><FaCheck></FaCheck></button>
                                 <button onClick={()=> handlerejectpackage(item)} className="ml-7 text-red-500 btn btn-sm"
                                 disabled={item?.status==='accept' || item.status==='rejected'}
                                 > <MdCancel /></button></td>
                                
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