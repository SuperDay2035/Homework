import React from 'react';
import "./about.scss"
import Bring from "../Icons/Bring.png"
import OrderList from "../Icons/OrderList.png"
import ManOrder from "../Icons/ManOrder.jpg"
import OrderSpeed from "../Icons/OrderSpeed.png"
function About() {
    return (
        <div className="About">

            <div className="About-sentence">

                <h1>Why We Are The Best?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley...</p>

            </div>


                <div className="reasons">

                    <div className="Cards-Reason">
                        <div className="reason-cards">
                            <div className="reason-logo">
                                <img src={Bring} alt=""/>
                            </div>
                            <div className="reason-text">
                                <h2>Fasted delivery Service</h2>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="reason-cards ">
                            <div className="reason-logo">
                                <img src={OrderList} alt=""/>
                            </div>
                            <div className="reason-text">
                                <h2>Online order Service</h2>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="reason-cards">
                            <div className="reason-logo">
                                <img src={OrderSpeed} alt=""/>
                            </div>
                            <div className="reason-text">
                                <h2>24/8 Service</h2>
                                <p>Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ManOrder">
                        <img src={ManOrder} alt=""/>
                    </div>



            </div>


        </div>
    );
}

export default About;