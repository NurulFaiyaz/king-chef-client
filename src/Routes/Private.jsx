import { Navigate, useLocation } from "react-router-dom";
import UseInfo from "../Hooks/UseInfo";

const Private = ({ children }) => {

    const location = useLocation()
    const { user, loading } = UseInfo()


    console.log("loading from private page", "userLoading ->", user, loading)

    if (user) {
        return children;
    }

    if (loading) {
        return "Loading form private page"
    }

    if (!user && !user?.email) {
        return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    }




};

export default Private;