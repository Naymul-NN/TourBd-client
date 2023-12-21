import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://tour-bd-server-seven.vercel.app'
})
const useAxiospublic = () => {
    return axiosPublic;
};

export default useAxiospublic;