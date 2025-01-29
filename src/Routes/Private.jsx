import { Navigate, useLocation } from "react-router-dom";
import UseInfo from "../Hooks/useInfo";

const Private = ({ children }) => {

    const location = useLocation()
    const {user, loading} = UseInfo()

    if (loading) return <p>Loading</p>

    if (user?.email) return children;

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default Private;