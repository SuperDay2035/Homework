import React from 'react';
import "./Explore.scss"
import Vegetables from "../Images/Vegetables.png"
import Leaves from "../Images/leaves.png"
function Explore() {
    return (

        <div className="section">

            <div className="Explore">
                <div className="photo">
                    <img src={Vegetables} alt=""/>
                </div>
                <div className="explore-sentence">

                    <h1>Explor Our Special Items</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer...</p>

                    <div className="Explore-now">

                        <div className="Explorenow">
                            <span>Explore</span>
                            <a href="#" className="Explore-link"> -> </a>
                        </div>

                        <div className="Leaves">
                            <img src={Leaves} alt=""/>
                        </div>

                    </div>


                </div>
            </div>

        </div>

    );
}

export default Explore;
;