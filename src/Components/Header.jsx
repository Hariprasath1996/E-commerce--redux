import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [input,setInput]=useState("")
    return (<>
        <div className="header flex flex-row  bg-slate-600 p-6 w-screen h-auto justify-evenly   text-white  font-serif font-bold ... text-lg ...   ">
            <h1 className="heading pl-6 pr-4 bg-white rounded-lg font-serif font-bold ... text-lg ... text-orange-500  flex items-center	 "> Big Bazar </h1>
            <Link className="flex items-center" to={'/'}>HOME</Link>
            <Link className="flex items-center" to={'/about'}>ABOUT</Link>
            <Link className="flex items-center"to={'/shop'}>SHOP</Link>
            <Link className="flex items-center"to={'/contact'}>CONTACT_US</Link>
            <Link className="flex items-center"to={'/log-in'}>LOG_IN</Link>
            <input className="p-2 rounded" type="text" placeholder="Search  Here ...." onChange={(e)=>setInput(e.target.value)} />
            <Link className="flex items-center" to={'/Cart'}>CART</Link>
        </div>
    </>);
}
export default Header;