import { Navigate } from "react-router-dom";
import UseInfo from "../Hooks/UseInfo";
import UseUser from "../Hooks/UseUser";

const AdminRoute = ({ children }) => {

    const [userInfo, isLoading] = UseUser()
    const { user, loading } = UseInfo()
    console.log(userInfo)

    if (user?.email && userInfo?.role == "admin") return children
    if (isLoading || loading) return "Loading"

    return <Navigate to={'/'}></Navigate>
};

export default AdminRoute;