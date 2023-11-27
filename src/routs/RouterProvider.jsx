import { createBrowserRouter,} from "react-router-dom";
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


    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout></Layout>,
          children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
            path:"/viewpackage/:id",
            element:<PrivetRout><ViewPackage></ViewPackage></PrivetRout>,
            loader:({params})=> fetch(`http://localhost:5000/tabTour/${params.id}`)
            },
            {
              path:"/allDetails/:id",
              element:<PrivetRout><Alldetails></Alldetails></PrivetRout>,
              loader:({params})=> fetch(`http://localhost:5000/allpackage/${params.id}`)
            },
            {
             path:"/guideDetails/:id",
             element:<PrivetRout><GuideDetails></GuideDetails></PrivetRout>,
            loader:({params})=>fetch(`http://localhost:5000/tourGuide/${params.id}`)
            },
            {
              path:"/fullstory/:id",
              element:<Stotydetails></Stotydetails>,
              loader:({params})=> fetch(`http://localhost:5000/storyone/${params.id}`)
            },
            {
             path:"/allstory",
             element:<Allstory></Allstory>
            },
            {
              path:'/allpackage',
              element:<Allpackage></Allpackage>
            },
            {
              path:"/register",
              element:<Register></Register>
            },
            {
              path:"/signin",
              element:<Signin></Signin>
            }
          ]
        },
        {
          path:"dashbord",
          element:<Dashbord></Dashbord>
        }
      ]);

export default router;