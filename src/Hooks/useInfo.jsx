import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseInfo = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UseInfo;