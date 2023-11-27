
import { FaPersonHiking, FaSailboat } from "react-icons/fa6";
import { FaHelicopter, FaWalking } from "react-icons/fa";
import { GiJungle } from "react-icons/gi";
import { Link } from "react-router-dom";

const ToutType = () => {
    return (
        <div className="pb-10">
            <h1 className="text-center text-3xl py-7">What do you like most</h1>
            <div className="flex justify-evenly">
              <Link to = "/allpackage">
              <div className="w-40 h-40 flex flex-col rounded-xl justify-center items-center bg-gradient-to-r from-green-100 to-red-100"><GiJungle className="text-2xl"/> Adventure</div>
              </Link>   
                 <Link to="/allpackage">
                 <div className="w-40 h-40 flex flex-col rounded-xl justify-center items-center bg-gradient-to-r from-green-100 to-red-100"><FaPersonHiking className="text-2xl" /> hiking</div>
                 </Link>
                <Link to= "/allpackage">
                <div className="w-40 h-40 flex flex-col rounded-xl justify-center items-center bg-gradient-to-r from-pink-200 to-green-200"><FaWalking className=" text-2xl" /> walking</div>
                </Link>
                <Link to="/allpackage">
                <div className="w-40 h-40 flex flex-col rounded-xl justify-center items-center bg-gradient-to-r from-green-100 to-red-100"><FaSailboat className="text-2xl" /> boating</div>
                </Link>
                <Link to="/allpackage">
                <div className="w-40 h-40 flex flex-col rounded-xl justify-center items-center bg-gradient-to-r from-green-100 to-red-100"><FaHelicopter className="text-2xl" /> flying</div>
                </Link>
            </div>

        </div>
    );
};

export default ToutType;