import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import UseInfo from "../../../Hooks/useInfo";
import toast, { Toaster } from "react-hot-toast";
import useCart from "../../../Hooks/useCart";

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const { user } = UseInfo()
    const [cart] = useCart()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const location = useLocation()
    const totalPrice = location?.state
    console.log(totalPrice)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data?.clientSecret)
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
        }

        // Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name,
                    email: user?.email
                }
            }
        })
        if (confirmError) {
            console.log("confirmError")
            setError(confirmError)
        } else {
            console.log("Payment intent", paymentIntent)
        }

        if (paymentIntent.status === "succeeded")
            // console.log(paymentIntent.id)
            setTransactionId(paymentIntent.id)


        // Save Payment data
        const paymentData = {
            email: user?.email,
            date: new Date(),
            transactionId: paymentIntent.id,
            price: totalPrice,
            cartIds: cart.map(item => item._id),
            menuItemIds: cart.map(item => item.menuId),
            status: "pending"
        }
        const res = await axiosSecure.post('/payments', paymentData)
        console.log("payment saved", res.data)
        if (res.data.paymentResult.insertedId) {
            toast.success("Payment confirmed")
            navigate('/dashboard/payment-history')
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <CardElement
                className="my-6"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {transactionId && <p >Transaction Id: <span className="text-green-400">{transactionId}</span></p>}
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary rounded-none px-10 text-base my-6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;