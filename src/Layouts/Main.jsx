import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Sheared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;