import React from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { Routes,Route } from "react-router";


const Home = () => {
    return (<>
    <div className=" overflow-x-hidden">
    <Header/>
        <Routes>
            <Route path="/" element={<DashBoard/>} />
        </Routes>
    </div>
        
    </>);
}

export default Home;