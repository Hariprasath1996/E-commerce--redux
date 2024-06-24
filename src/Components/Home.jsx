import React, { useState } from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import ProductContainer from "./ProductContainer";
import { Routes,Route } from "react-router";


const Home = () => {
    return (<>
    <div className=" overflow-x-hidden">
    <Header/>
        <Routes>
            <Route path="/" element={<DashBoard/>} />
            <Route path="/product/:id" element={<ProductContainer/>} />
        </Routes>
    </div>
        
    </>);
}

export default Home;