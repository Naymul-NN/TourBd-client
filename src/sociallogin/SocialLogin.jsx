import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import useAxiospublic from "../hooks/useAxiospublic";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const axiosPublic = useAxiospublic();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handlegooglesignin = () => {
        googleLogin(provider)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/');
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="p-6 flex justify-center items-center">
            <div>
                <button onClick={handlegooglesignin} className="btn">
                    <FaGoogle></FaGoogle>
                    go with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;