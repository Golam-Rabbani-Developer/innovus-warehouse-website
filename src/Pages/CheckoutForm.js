import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const CheckoutForm = ({ newPrice, insertId }) => {
    const [user] = useAuthState(auth)
    const stripe = useStripe();
    const elements = useElements();
    const [transactionid, setTransactionID] = useState(null)
    const [clientSecret, setClientSecret] = useState("");
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    useEffect(() => {
        fetch("https://innovus-client.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setClientSecret(data.clientSecret)
            });
    }, [newPrice]);
    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setPaymentError(error?.message)
        setPaymentSuccess(null)


        // confirm the payment 
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        )
        if (intentError) {
            setPaymentError(intentError.message)
        } else {
            setPaymentSuccess("Congrates! Your Payment Is Success")
            setTransactionID(paymentIntent.id)
            if (paymentIntent) {
                fetch(`https://innovus-client.herokuapp.com/order/${insertId}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ transactionid: paymentIntent.id })
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <CardElement className="bg-white p-4 h-[150px]"
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
            <div className="mt-12">
                <p className="text-red-500 font-bold">{paymentError}</p>
                {paymentSuccess && transactionid && <p className="text-green-500 font-bold">
                    {paymentSuccess}
                    <p>Your Transaction Id : {transactionid}</p>
                </p>}
            </div>
            <button type="submit" className="btn btn-primary mt-24" disabled={!stripe || !clientSecret || transactionid}>
                Pay
            </button>
        </form>
    );
};


export default CheckoutForm;