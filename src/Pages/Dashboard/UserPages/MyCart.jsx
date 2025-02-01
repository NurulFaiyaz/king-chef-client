import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    const handleDelete = id => {
        console.log(id)
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                }
            }
            )
    }

    return (
        <div>
            <Helmet>
                <title>King Chef | Cart</title>
            </Helmet>
            <SectionTitle heading='Wanna Add More?' subHeading='My Cart'></SectionTitle>

            <div className="w-11/12 mx-auto p-10 rounded-md bg-white">
                <div className="flex justify-between mb-5 font-semibold items-center">
                    <h4>TOTAL ORDERS: {cart.length}</h4>
                    <h4>TOTAL PRICE: ${totalPrice}</h4>
                    {cart.length > 0 ? <Link state={totalPrice} to='/dashboard/payment'><button className="btn btn-sm font-medium bg-[#d1a054]">PAY</button></Link> : <button disabled className="btn btn-sm font-medium bg-[#d1a054]">PAY</button>}
                </div>

                <div className="overflow-x-auto rounded-xl">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white">
                            <tr>
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        {cart.map((item, index) => <tbody key={item._id}>
                            {/* row 1 */}
                            <tr>
                                <th>{index + 1}</th>
                                <td><img className="w-20" src={item.image} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><button onClick={() => handleDelete(item._id)} className="btn btn-sm bg-red-600 text-white text-base"><RiDeleteBin5Line /></button></td>
                            </tr>
                        </tbody>)}
                    </table>

                </div>
            </div>
        </div>
    );
};

export default MyCart;