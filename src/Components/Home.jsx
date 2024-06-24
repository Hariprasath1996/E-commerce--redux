import React from "react";
import Header from "./Header";
import DashBoard from "./DashBoard";
import { Routes,Route } from "react-router";


const Home = () => {
    return (<>
        <Header/>
        <Routes>
            <Route path="/" element={<DashBoard/>} />
        </Routes>
    </>);
}

export default Home;