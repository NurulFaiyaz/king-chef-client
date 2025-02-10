import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const ManageFood = () => {
    const axiosSecure = useAxiosSecure()

    const { data: manageMenu = [] } = useQuery({
        queryKey: ['manage-foods'],
        queryFn: async () => {
            const res = await axiosSecure.get('menus')
            return res.data
        }
    })
    console.log(manageMenu)


    // Delete Food Item

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            axiosSecure.delete(`menus/${id}`)
                .then(res => {
                    console.log(res)
                })

            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>King Chef | Manage Food</title>
            </Helmet>

            <SectionTitle heading='Manage Foods' subHeading='Manage All Menu Items'></SectionTitle>

            <div className="w-11/12 mx-auto p-10 rounded-md bg-white">
                <div className="flex justify-between mb-5 font-semibold items-center">
                    <h4>Total Food Items: {manageMenu.length}</h4>
                </div>

                <div className="overflow-x-auto rounded-xl">
                    <table className="table ">


                        <thead className="bg-[#d1a054] text-white">
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {manageMenu.map((item, index) => <tbody key={item._id}>

                            <tr>
                                <th>{index + 1}</th>
                                <td><img className="w-20" src={item.image} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => (item._id)} className="btn btn-sm bg-red-600 text-white text-base"><RiDeleteBin5Line /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-red-600 text-white text-base"><RiDeleteBin5Line /></button>
                                </td>
                            </tr>
                        </tbody>)}
                    </table>

                </div>
            </div>
        </div>
    );
};

export default ManageFood;