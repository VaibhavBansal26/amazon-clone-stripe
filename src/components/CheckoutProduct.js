import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket,removeItem } from "../slices/basketSlice";
import {PlusIcon,MinusIcon,TrashIcon} from "@heroicons/react/outline"


const { default: Image } = require("next/image")

const CheckoutProduct = ({id,title,price,rating,description,category,image,hasPrime,qty}) => {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product  = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
            qty
        };
        dispatch(addToBasket(product))
    };

    const removeItemFromBasket = () => {
        //Remove item from Redux
        dispatch(removeFromBasket({id}))
    }

    const deleteItem = () => {
        dispatch(removeItem({id}))
    }


    return (
        <div  className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain"/>
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon key={i} fill="gold" className="h-5 text-yellow-300 "/>
                ))}
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <p className="my-2 items-center">Qty:<button className="cursor-pointer mx-2 border-none focus:outline-none" onClick = {addItemToBasket}><PlusIcon className="h-4"/></button><span className="mb-2">{qty}</span><button className="cursor-pointer mx-2 border-none focus:outline-none" onClick = {removeItemFromBasket}><MinusIcon className="h-4"/></button></p>
                <p className="text-gray-400">{qty} x <Currency quantity={price} currency="INR"/> = <Currency quantity={price*qty} currency="INR"/></p>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                        loading="lazy"
                        className="w-12"
                        src="https://links.papareact.com/fdw"
                        alt=""
                        />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/** Right*/}
            <div className="flex flex-col space-y-2 my-auto justify-self-end p-2">
                {/* <div className="mt-auto button" onClick = {addItemToBasket}>Add</div> */}
                <div className="mt-auto cursor-pointer" onClick = {deleteItem}><TrashIcon className="h-6"/></div>
            </div>
        </div>
    )
}

export default CheckoutProduct
