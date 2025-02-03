import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseInfo from "./UseInfo";

const UseUser = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = UseInfo()
    const { data: userInfo = [], isLoading } = useQuery({
        queryKey: ["user-Info"],
        queryFn: async () => {
            const res = await axiosSecure(`/users/${user?.email}`)
            return res.data
        }
    })
    console.log(userInfo)

    return [userInfo, isLoading]
};

export default UseUser;