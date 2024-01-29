import React from 'react';
import "./main.scss";
import Earth from "../Icons/Earth.png"
import StatsStar from "../Icons/stats-star.png";
import Statuser from "../Icons/stats-user.png"
import Sell from "../Icons/Sell.png"
import Cake from "../Icons/Cake.png"
import Search from "../Icons/Search.png"
import Leaves from "../Images/leaves.png"
import Fruits from "../Images/Fruits.png"

import {Button} from "@mui/material";
function Home() {
    return (


            <div className="home">

                <div className="Navbar">

                    <div className="links">

                        <ul>
                            <li>About Us</li>
                            <li>Service</li>
                            <li>Menu</li>
                            <li>Contact</li>
                        </ul>

                    </div>
                    <div className="logo">

                        <img src={Earth} alt=""/>

                    </div>
                    <div className="settings">

                        <div className="stuff">
                            <img src={Search} alt=""/>
                            <img src={Sell} alt=""/>

                        </div>
                        <Button className="Register-btn">Regestar Now</Button>

                    </div>


                </div>

                <div className="homepage">

                    <div className="Main">

                        <div className="leaves">
                            <img src={Leaves} alt=""/>
                        </div>
                        <h1>Organic Fruit & Vegetables</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                        </p>

                        <div className="Order">
                            <span>Order</span>
                            <a href="#" className="Order-btn"> -> </a>
                        </div>

                        <div className="Fruit">

                            <div className="fruit-img">
                                <img src={Fruits} alt=""/>
                            </div>
                            <div className="Stats">

                                <div className="stat-box">
                                    <div className="icons">
                                        <img src={Statuser} alt=""/>
                                    </div>
                                    <div className="info">
                                        <h1>30K</h1>
                                        <p>User <span> Stats</span></p>
                                    </div>
                                </div>
                                <div className="stat-box ">
                                    <div className="icons">
                                        <img src={StatsStar} alt=""/>
                                    </div>
                                    <div className="info">
                                        <h1>20K</h1>
                                        <p >Revies(4.8)</p>
                                    </div>
                                </div>

                                <div className="stat-box">
                                    <div className="icons">
                                        <img src={Cake} alt=""/>
                                    </div>
                                    <div className="info">
                                        <h1>30K</h1>
                                        <h2 >User Stat</h2>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>

                </div>



        </div>
    );
}

export default Home;