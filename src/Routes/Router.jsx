import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Secretes from "../Pages/Secretes";
import Private from "./Private";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";
import MyCart from "../Pages/Dashboard/UserPages/MyCart";
import Order from "../Pages/Dashboard/UserPages/Order";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'order-food/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: 'secretes',
                element: <Private><Secretes></Secretes></Private>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Private><Dashboard></Dashboard></Private>,
        children: [
            {
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'order',
                element: <Order></Order>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);

export default router