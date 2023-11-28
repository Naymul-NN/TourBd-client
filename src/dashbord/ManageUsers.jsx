import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import Swal from "sweetalert2";

const ManageUsers = () => {
    
    const axiosPublic = useAxiospublic();
    const { isFetching, data,refetch } = useQuery({
        queryKey: [ 'wishlist'],
        queryFn: () =>
            axiosPublic.get('/users').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }


    const handleMakeAdmin= (user) =>{
        axiosPublic.patch(`/users/admin/${user._id}`)
         .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
             Swal.fire({
              position: "top-end",
              icon:'success',
              title:'admin add successfull',
              showCancelButton:false,
              timer:1500,
             })
          }
         })
      }
    const handleMakeguide= (user) =>{
        axiosPublic.patch(`/users/guide/${user._id}`)
         .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
             Swal.fire({
              position: "top-end",
              icon:'success',
              title:'admin add successfull',
              showCancelButton:false,
              timer:1500,
             })
          }
         })
      }
    console.log(data);
    return (
        <div>
            <h1 className="text-center text-2xl ">Manage all the users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Set Role</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>
                                { item.role === "admin" ? 'Admin' : <button 
                                 onClick={() => handleMakeAdmin (item)}
                                 className="btn btn-ghost btn-sm">
                                Make admin
                                 </button>
                                }
                                { item.role === "guide" ? 'guide' : <button 
                                 onClick={() => handleMakeguide (item)}
                                 className="btn btn-ghost btn-sm">
                                Make guide
                                 </button>
                                }

                                </td>
                                <td>{item.email} </td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;