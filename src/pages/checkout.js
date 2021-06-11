import { useSession } from 'next-auth/client'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectQty, selectTotal } from '../slices/basketSlice'
import Currency from "react-currency-formatter";
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const qnty = useSelector(selectQty)
    const [session] = useSession();

    const createCheckoutSession = async() => {
        const stripe = await stripePromise;
        //call the back end to create a checkout session...
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items:items,
            email:session.user.email
        });
        //redirect user to checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if(result.error){
            alert(result.error.message)
        }
    }
    return (
        <div className="bg-gray-100">
            <Header/>
            <main className="mt-4 lg:flex max-w-screen-2xl mx-auto">
                {/**Left Section */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ?
                            "Your Amazon Basket is empty. 🥺" :
                            "Your Shopping Cart"}
                        </h1>
                                {items.map((item,i)=>(
                                    <CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    rating={item.rating}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                    hasPrime={item.hasPrime}
                                    qty={item.qty}
                                    />
                                ))}
                    </div>
                </div>
                {/**Right Section */}
                <div className="flex flex-col bg-white p-10 shadow-md mt-16">
                    {items.length > 0 &&(
                        <>
                        <h2 className="whitespace-nowrap">Sub Total ({qnty} items):<span className="font-bold"><Currency quantity={total} currency="INR"/></span>
                        </h2>
                        <button
                        role="link"
                        onClick={createCheckoutSession}
                        disabled={!session} 
                        className={`button mt-2 font-bold ${!session && 'from-gray-300 to-gray-200 border-gray-200 text-gray-200 cursor-not-allowed'}`}>
                            {!session ? 'Sign In to Checkout...':'Proceed to Checkout'}
                        </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
