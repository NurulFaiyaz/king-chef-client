import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseInfo from "../../../Hooks/UseInfo";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {

    const { user } = UseInfo()
    const axiosSecure = useAxiosSecure()
    const { data, isLoading } = useQuery({
        queryKey: ['userPaymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    if (isLoading) return "Loading"
    console.log(data)

    return (
        <div>
            <Helmet>
                <title>King Chef | Payment History</title>
            </Helmet>

            <div className="w-11/12 mx-auto p-10 rounded-md bg-white">
                <div className="text-center font-bold mb-6 text-xl">
                    <h2>Payment History</h2>
                </div>
                <div className="mb-5 font-semibold">
                    <h4>TOTAL ORDERS: {data.length}</h4>
                </div>

                <div className="overflow-x-auto rounded-xl">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#d1a054] text-white">
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>PRICE</th>
                                <th>Status</th>
                                <th>Payment Data</th>
                            </tr>
                        </thead>
                        {data.map((payment, index) => <tbody key={payment._id}>
                            {/* row 1 */}
                            <tr>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <th>{payment.transactionId}</th>
                                <td className="text-green-500">{payment.price}</td>
                                <td>{payment.status}</td>
                                <td>{payment.date}.</td>
                            </tr>
                        </tbody>)}
                    </table>

                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;