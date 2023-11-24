import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Layout = () => {
    return (
        <div>
           <div className="w-[90%] mx-auto overflow-x-hidden">
           <NavBar></NavBar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;