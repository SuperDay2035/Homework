import React from 'react';
import "./Customer.scss"
import Balls from "../Icons/Balls.png"
import Ballforassistent from "../Images/Balls-For-Assistent.png"

function Customer() {
    return (
        <div>

            <div className="section">


                <div className="Custom-text">

                    <h1>What Our Customers About Us saying</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It hsas survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularis</p>


                    <div className="Balls">

                        <div className="name">
                            <h2>Ahmad Hridoy</h2>
                            <img src={Balls} alt=""/>
                        </div>
                        <div className="switch">
                            <div className="left-switch">
                                <a href="#"> 1 </a>
                            </div>
                            <div className="right-switch">
                                <a href="#"> 2 </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Custom-photo">

                    <img src={Ballforassistent} alt=""/>

                </div>


            </div>



        </div>
    );
}

export default Customer;