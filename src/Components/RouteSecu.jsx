import { useContext } from "react";
import { Outlet } from "react-router";
import AuthContext from "../Context/AuthContext";
import LoginPage from "../Pages/LoginPage";

const RouteSecu = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <LoginPage   />
;
}
 
export default RouteSecu;