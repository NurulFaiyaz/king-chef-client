import { FaHome, FaShoppingCart } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { MdDeliveryDining, MdOutlinePayment, MdPhoneCallback } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="h-[100vh] bg-[#d1a054] p-6">
            <div className="text-left tracking-[0.2rem] mb-10">
                <Link to='/'><h2 className="font-bold text-2xl">King Chef</h2></Link>
                <p className="">Restaurant</p>
            </div>
            <div id="sidebar" className="flex flex-col text-base gap-2">
                <NavLink to='user-home'><p className="flex items-center gap-2 text-base"><FaHome className="" />User Home</p></NavLink>
                <NavLink to='my-cart'><p className="flex items-center gap-2 text-base"><FaShoppingCart />My Cart</p></NavLink>
                <NavLink to='order'><p className="flex items-center gap-2 text-base"><MdDeliveryDining />Order</p></NavLink>
                <NavLink to='payment-history'><p className="flex items-center gap-2 text-base"><MdOutlinePayment />Payment History</p></NavLink>
                <hr className="border-black my-4" />
                <NavLink to='/'><p className="flex items-center gap-2 text-base"><FaHome />Home</p></NavLink>
                <NavLink to='/menu'><p className="flex items-center gap-2 text-base"><LuNotepadText />Menu</p></NavLink>
                <NavLink to='/contact-us'><p className="flex items-center gap-2 text-base"><MdPhoneCallback />Contact</p></NavLink>
            </div>
        </div>
    );
};

export default Sidebar;