import React, { useEffect, useState } from 'react';
import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon,LocationMarkerIcon, ChevronDownIcon} from "@heroicons/react/outline"
import {signIn,signOut,useSession} from 'next-auth/client'
import {Router,useRouter} from "next/router";
import { selectItems, selectQty } from '../slices/basketSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [session] = useSession();
    const router = useRouter();

    const items = useSelector(selectItems)
    const qnty = useSelector(selectQty)

    const [show,handleShow] = useState(false);

    const [p,handleP] = useState(true)


    const transitionNavBar1 = () =>{
        if(window.location.pathname === '/'){
            handleP(true)
        }else{
            handleP(false)
        }
    }

    const transitionNavBar = () =>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    }, [])

    useEffect(() => {
        window.addEventListener("load",transitionNavBar1);
        return () => window.removeEventListener("load",transitionNavBar1)
    }, [])


    return (
        <header className={`w-full ${p && "fixed top-0 w-full z-40"}`}>
        
            {/**Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 sapce-x-4 xs:flex-shrink">
                <div className="mt-4 flex items-center flex-grow inline-block sm:flex-grow-0">
                    <Image
                    onClick={() => router.push('/')}
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer sm:w-4 h-4 "
                    />
                </div>
                <div className="hidden sm:flex items-center text-white p-2 space-x-3 inline-block">
                    <LocationMarkerIcon className="h-5"/>
                    <div>
                    <p className="text-sm">Deliver to {session ? `${session.user.name}`:"Guest"}</p>
                    <p className="font-extrabold flex items-center md:text-sm">
                        Your Location</p>
                    </div>
                </div>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 mx-4">
                    <div className="flex items-center h-10 px-4 py-2 bg-gray-100 h-10 rounded-l-md hover:bg-gray-300 space-x-2">
                        All
                        <ChevronDownIcon className="h-3"/>
                        </div>
                    <input className="p-2 h-full w-6 flex-grow focus:outline-none  xs:flex-shrink" type="text"  />
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/**Right */}
                <div className="text-white flex items-center text-xs space-x-4 mx-3">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>{session ? `Hello, ${session.user.name}`:"Sign In"}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link" onClick={() => router.push("/orders")}>
                        <p>Return</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div  className="relative link flex items-center"
                     onClick={() => router.push('/checkout')}>
                        <span className="absolute top-0 right-2 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{qnty}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/**Bottom nav */}
            <div className={`flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm xs:text-xs ${show && "hidden"} `}>
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link xs:text-xs">Prime Video</p>
                <p className="link xs:text-xs">Amazon Business</p>
                <p className="link xs:text-xs">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
