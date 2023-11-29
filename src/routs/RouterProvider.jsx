import { createBrowserRouter, } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../auth/Register";
import Signin from "../auth/Signin";
import ViewPackage from "../viewpackage/ViewPackage";
import GuideDetails from "../home/GuideDetails";
import Allpackage from "../home/Allpackage";
import Alldetails from "../home/Alldetails";
import Stotydetails from "../home/Stotydetails";
import Allstory from "../home/Allstory";
import PrivetRout from "../privet/PrivetRout";
import Dashbord from "../layout/Dashbord";
import UserHome from "../dashbord/UserHome";
import Wellcome from "../dashbord/Wellcome";
import UserBookings from "../dashbord/UserBookings";
import Wishlist from "../dashbord/Wishlist";
import AdminHome from "../dashbord/AdminHome";
import Addpackage from "../dashbord/Addpackage";
import ManageUsers from "../dashbord/ManageUsers";
import Guidehome from "../dashbord/Guidehome";
import AssignTour from "../dashbord/AssignTour";
import Community from "../community/Community";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../about/AboutUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/viewpackage/:id",
        element: <PrivetRout><ViewPackage></ViewPackage></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/tabTour/${params.id}`)
      },
      {
        path: "/allDetails/:id",
        element: <PrivetRout><Alldetails></Alldetails></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/allpackage/${params.id}`)
      },
      {
        path: "/guideDetails/:id",
        element: <PrivetRout><GuideDetails></GuideDetails></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourGuide/${params.id}`)
      },
      {
        path: "/fullstory/:id",
        element: <Stotydetails></Stotydetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/storyone/${params.id}`)
      },
      {
        path: "/allstory",
        element: <Allstory></Allstory>
      },
      {
        path: '/community',
        element: <Community></Community>
      },
      {
        path:'/aboutus',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/contactus',
        element:<ContactUs></ContactUs>
      },
      {
        path: '/allpackage',
        element: <Allpackage></Allpackage>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      }
    ]
  },
  {
    path: "dashbord",
    element: <PrivetRout><Dashbord></Dashbord></PrivetRout>,
    children: [
      {
        path: 'wellcome',
        element: <Wellcome></Wellcome>
      },
      // user role
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'userbookings',
        element: <UserBookings></UserBookings>
      },
      {
        path: 'userwishlist',
        element: <Wishlist></Wishlist>
      },
      // admin role
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'addpackage',
        element: <Addpackage></Addpackage>
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'guideHome',
        element: <Guidehome></Guidehome>
      },
      {
        path: 'guideBookings',
        element: <AssignTour></AssignTour>
      }
    ]
  }
]);

export default router;