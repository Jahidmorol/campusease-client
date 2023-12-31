import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyColleges from "../Pages/MyColleges/MyColleges";
import CollegeDetails from "../Pages/Colleges/CollegeDetails";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import SignIn from "../Pages/Login/SignIn/SignIn";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivatetRoutes from "./PrivatetRoutes";
import Error from "../Pages/Sheared/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collages",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/myCollages",
        element: <PrivatetRoutes><MyColleges></MyColleges></PrivatetRoutes>,
      },
      {
        path: "/details/:id",
        element: <PrivatetRoutes><CollegeDetails></CollegeDetails></PrivatetRoutes>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/admission/:collegeName",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
