import { Link, NavLink } from "react-router-dom";
import UseInfo from "../../../Hooks/UseInfo";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import UseUser from "../../../Hooks/UseUser";
import './Navbar.css'

const Navbar = () => {
    const [cart] = useCart()
    const { user } = UseInfo()
    const { logOut } = useContext(AuthContext)
    const [userInfo] = UseUser()

    // console.log("Navbar Loading States -> UseInfo:", "UseUser:", isLoading);
    // console.log("User Info:", userInfo);


    console.log(userInfo)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }



    const navOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
        <li><NavLink to={userInfo?.role === "admin" ? '/dashboard/admin-home' : '/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order-food/salad'}>Order Food</NavLink></li>
    </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:px-12 text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl uppercase">king Chef <br /> <span className="text-xs line-clamp-1 tracking-[.25em] text-center uppercase">Restaurant</span></Link>
                </div>

                <div className="navbar-end gap-4">
                    <div className=" hidden lg:flex">
                        <ul id="menu" className="  menu-horizontal gap-4 px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='dashboard/my-cart'>
                        <button className="flex items-center gap-1 text-lg btn btn-sm">
                            <FaShoppingCart />
                            <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                    </Link>
                    {user?.email ?
                        <button className=" rounded-none text-lg" onClick={handleLogOut}>LOGOUT</button> :
                        <button className=" rounded-none text-lg">
                            <NavLink to={'/login'}>LOGIN</NavLink>
                        </button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;