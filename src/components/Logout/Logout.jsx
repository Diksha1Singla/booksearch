import { useAppContext } from "../../context";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const {LogoutUser} = useAppContext()

    useEffect(()=>{
        LogoutUser()
    },[LogoutUser]);
    return <Navigate to="/login"/>
}
export default Logout;
