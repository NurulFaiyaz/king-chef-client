import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseInfo = () => {
    const { user, loading, createUser, signIn, logOut } = useContext(AuthContext)
    return [user, loading, createUser, signIn, logOut]
};

export default UseInfo;