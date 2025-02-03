import { Navigate, useLocation } from "react-router-dom";
import UseInfo from "../Hooks/UseInfo";

const Private = ({ children }) => {

    const location = useLocation()
    const { user, loading } = UseInfo()

    if (user?.email) return children;

    if (loading) return "Loading Page"

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default Private;