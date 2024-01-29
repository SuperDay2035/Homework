import React from 'react';
import Earth from "../Icons/Earth.png"
import "./footer.scss"
import Social from "../Icons/Social.png"

function Footer() {
    return (
        <div>

            <div className="section2">

                <div className="box-container">

                    <div className="box">
                        <div className="img">
                            <img src={Earth} alt=""/>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer...</p>
                    </div>

                    <div className="box">
                        <h2>Navigation</h2>
                        <a href="#">About Us</a>
                        <a href="#">Service</a>
                        <a href="#">Menu</a>

                    </div>

                    <div className="box">
                        <h2>Resources</h2>
                        <a href="#">Reviews Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Update News</a>

                    </div>   <div className="box">
                        <h2>Contact Us</h2>
                        <a href="#">Email: oyasim@email.com</a>
                        <div className="social">
                            <a href="#"><img src={Social} alt=""/></a>
                        </div>


                </div>

                </div>

            </div>

        </div>
    );
}

export default Footer;