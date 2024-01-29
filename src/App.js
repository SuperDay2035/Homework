import React from 'react';
import Home from "./Component/Home";
import "./App.scss"
import About from "./Component/About";
import Explore from "./Component/Explore";
import Customer from "./Component/Customer";
import Download from "./Component/Download";
import Footer from "./Component/Footer";

function App() {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Explore></Explore>
            <Customer></Customer>
            <Download></Download>
            <Footer></Footer>
        </div>
    );
}

export default App;