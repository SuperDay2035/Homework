import React from 'react';
import "./download.scss"
import DownloadApp from "../Images/Download-app.png"
import Markets from "../Images/Markets.png"
function Download() {
    return (
        <div>

            <div className="section1">

                <div className="Download-app">

                    <div className="download-img">
                        <img src={DownloadApp} alt=""/>
                    </div>

                </div>

                <div className="Download-sentence">

                    <a href="#">Dowload App</a>
                    <h2>Simple Way To Order Your Organic Fruit </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer...</p>
                    
                    <div className="Markets">
                        <img src={Markets} alt=""/>
                    </div>
                    
                </div>


            </div>

        </div>
    );
}

export default Download;