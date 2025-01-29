import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseInfo from "./useInfo";


const useCart = () => {
    const { user } = UseInfo()
    const axiosSecure = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user.email}`)

            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;