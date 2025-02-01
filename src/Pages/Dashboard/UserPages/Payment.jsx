import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {    

    return (
        <div>
            <Helmet>
                <title>King Chef | Payment</title>
            </Helmet>
            <SectionTitle heading='Pay for your food!' subHeading='Payment'></SectionTitle>

            <div className="md:w-2/3 mx-auto my-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;