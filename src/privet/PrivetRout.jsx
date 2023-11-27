/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user,loading}= useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    
  if(user){
    return children;
}

 return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivetRout;