import { Link, NavLink } from "react-router-dom";
import UseInfo from "../../../Hooks/useInfo";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

    const [user] = UseInfo()
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err)
            })
    }

    const navOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order-food/salad'}>Order Food</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
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
                    <Link to={'/'} className="text-xl">king Chef</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? <button className="btn btn-ghost text-lg" onClick={handleLogOut}>Logout</button> : <button className="btn btn-ghost text-lg"><NavLink to={'/login'}>Log In</NavLink></button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;