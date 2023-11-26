import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "../hooks/useAxiospublic";
import { Link } from "react-router-dom";


const Guides = () => {
    const axiosPublic = useAxiospublic();
    const { isFetching, data, } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: () =>
            axiosPublic.get('/tourGuides').then((res) => res.data),
    });

    if (isFetching) {
        return <p>Loading...</p>;
    }
    // console.log(data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Good at</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => 
                         <tr key={item._id}>
                         <th>
                            {index + 1}
                         </th>
                         <td>
                             <div className="flex items-center gap-3">
                                 <div className="avatar">
                                     <div className="mask mask-squircle w-12 h-12">
                                         <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                     </div>
                                 </div>
                                 <div>
                                     <div className="font-bold">{item.name}</div>
                                     <div className="text-sm opacity-50">{item.nationality}</div>
                                 </div>
                             </div>
                         </td>
                         <td>
                            {item.email}
                         </td>
                         <td>{item.language}</td>
                         <th>
                            <Link to={`/guideDetails/${item._id}`}> <button className="btn btn-secondary btn-xs">details</button></Link>
                         </th>
                     </tr> 
                        )}
                                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Guides;