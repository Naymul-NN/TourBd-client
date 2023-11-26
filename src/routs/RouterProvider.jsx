import { createBrowserRouter,} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../auth/Register";
import Signin from "../auth/Signin";
import ViewPackage from "../viewpackage/ViewPackage";
import GuideDetails from "../home/GuideDetails";


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
            element:<ViewPackage></ViewPackage>,
            loader:({params})=> fetch(`http://localhost:5000/tabTour/${params.id}`)
            },
            {
             path:"/guideDetails/:id",
             element:<GuideDetails></GuideDetails>,
            loader:({params})=>fetch(`http://localhost:5000/tourGuide/${params.id}`)
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
      ]);

export default router;