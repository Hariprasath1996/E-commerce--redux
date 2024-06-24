import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    return (<>
        <div className="header flex flex-row  bg-slate-600 p-6 w-screen h-auto justify-evenly   text-white  font-serif font-bold ... text-lg ...   ">
            <h1 className="heading pl-6 pr-4 bg-white rounded-lg font-serif font-bold ... text-lg ... text-orange-500  flex items-center	 "> Big Bazar </h1>
            <Link className="flex items-center">HOME</Link>
            <Link className="flex items-center">ABOUT</Link>
            <Link className="flex items-center">SHOP</Link>
            <Link className="flex items-center">CONTACT_US</Link>
            <Link className="flex items-center">LOG_IN</Link>
            <input className="p-2 rounded" type="text" placeholder="Search  Here ...." />
            <Link className="flex items-center">CART</Link>
        </div>
    </>);
}

export default Header;