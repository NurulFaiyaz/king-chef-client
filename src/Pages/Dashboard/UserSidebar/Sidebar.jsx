import { FaHome, FaShoppingCart } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { MdDeliveryDining, MdOutlinePayment, MdPhoneCallback } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import './Sidebar.css'
import UseUser from "../../../Hooks/UseUser";


const Sidebar = () => {

    const [userInfo, isLoading] = UseUser()


    // console.log("SideBar Loading", "userInfo ->", isLoading)

    if (isLoading  || !userInfo) return "loading"

    return (
        <div className="h-[100vh] bg-[#d1a054] p-6">
            <div className="text-left tracking-[0.2rem] mb-10">
                <Link to='/'><h2 className="font-bold text-2xl">King Chef</h2></Link>
                <p className="">Restaurant</p>
            </div>
            <div id="sidebar" className="flex flex-col text-base gap-2">
                {
                    userInfo?.role === "admin" ?
                        <> <NavLink to='admin-home'><p className="flex items-center gap-2 text-base"><FaHome className="" />Admin Home</p></NavLink>
                            <NavLink to='add-food'><p className="flex items-center gap-2 text-base"><MdOutlinePayment />Add Food</p></NavLink>
                            <NavLink to='manage-food'><p className="flex items-center gap-2 text-base"><MdOutlinePayment />Manage Food</p></NavLink></>
                        :

                        <><NavLink to='user-home'><p className="flex items-center gap-2 text-base"><FaHome className="" />User Home</p></NavLink>
                            <NavLink to='my-cart'><p className="flex items-center gap-2 text-base"><FaShoppingCart />My Cart</p></NavLink>
                            <NavLink to='order'><p className="flex items-center gap-2 text-base"><MdDeliveryDining />Order</p></NavLink>
                            <NavLink to='payment-history'><p className="flex items-center gap-2 text-base"><MdOutlinePayment />Payment History</p></NavLink></>
                }

                {/* Admin Routes */}

                <hr className="border-black my-4" />

                <NavLink to='/'><p className="flex items-center gap-2 text-base"><FaHome />Home</p></NavLink>
                <NavLink to='/menu'><p className="flex items-center gap-2 text-base"><LuNotepadText />Menu</p></NavLink>
                <NavLink to='/contact-us'><p className="flex items-center gap-2 text-base"><MdPhoneCallback />Contact</p></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;