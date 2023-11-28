import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiospublic from "./useAxiospublic";
import { useQuery } from "@tanstack/react-query";

const useAmin = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiospublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAmin;