import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiospublic from "./useAxiospublic";
import { useQuery } from "@tanstack/react-query";

const useGuide = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiospublic();
    const { data: isguide, isPending: isguideLoading } = useQuery({
        queryKey: [user?.email, "isguide"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/guide/${user.email}`);
            console.log(res.data);
            return res.data?.guide;
        }
    })
    return [isguide, isguideLoading]
};

export default useGuide;