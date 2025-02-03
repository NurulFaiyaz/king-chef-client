import Swal from "sweetalert2";
import UseInfo from "../../Hooks/UseInfo";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ items }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { user } = UseInfo()
    const [, refetch] = useCart()
    const { name, recipe, image, price, _id } = items;

    const handleAddToCart = () => {

        if (user?.email) {
            //to do
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        toast.success(`${name} Successfully added to the cart`)
                    }
                    refetch()
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in.",
                text: "Do you want to login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-200 border rounded-none ">
            <figure>
                <img
                    className="w-full"
                    src={image}
                    alt={name} />
            </figure>
            <p className="absolute right-4 top-4 px-6 py-1 bg-black text-white text-xs">{price}</p>
            <div className="card-body">
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p className="text-sm">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn hover:text-amber-700 btn-outline border-0 border-b-4 text-amber-700">ADD TO CARD</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;