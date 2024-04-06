import React from "react";
import img from "../images/logo.jpeg"
import img1 from "../images/pic4.jpg"
const Header = ({ handleDarkMode }) => {
    return (
        <div className="header">
            <div className="leftpart">
                <img className="img1" src={img}></img>
                <div className="title">PyxelSync</div>
            </div>
            <div className="midpart">
                Statistics
            </div>
            <button onClick={() => handleDarkMode(
                (previousDarkMode) => !previousDarkMode
            )}
                className="save">Toggle
            </button>
            <div className="rightpart">
                <div>
                    <div className="text1">Hi,</div>
                    <div className="text2">ROOT</div>
                    <div className="text1">ADMIN</div>
                </div>
                <img className="img1" src={img1}></img>
            </div>
        </div>
    )
}
export default Header;