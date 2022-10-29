import React from "react";
import "../App.css"


export default function Profile() {

    return (
        <div>
           
            <div className="share">
                <img src="images/Type=Share, State=Default.png" className="share-icon"/>
                <img src="images/dott.png" className="dot"/>
            </div>

            < div className="profile-details">
                <div id="profile_img">
                    <img src="images/ada.jpg" />
                </div>
 
                <div id="twitter">
                    <img src="images/twww.png" />
                    <h3> @Adazoee</h3>
                </div>


                <div id="slack">
                    <h3>Adaking</h3>
                </div>

            </div>
        </div>
    )
}