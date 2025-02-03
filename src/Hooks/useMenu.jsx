import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const axiosSecure = useAxiosSecure()

    const { data: menus = [], isLoading: loading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure('/menus')
            return res.data
        }
    })

    return [menus, loading]
};

export default useMenu;