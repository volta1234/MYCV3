import React from "react";
import "./cvinput.css";
import CvInputNavbar from "./cvinputNavbar";

function Cvinput() {
    const handleProfile = (event) => {
        event.preventDefault();
    };
    return (
        <div class="container">
            <CvInputNavbar />
            <div div class="w3-content" style={{ maxWidth: "1400px" }}>
                <div class="w3-col l8 s12">
                    <div class="w3-card-4 w3-margin w3-white" style={{ width: "145%" }}>
                        <div class="w3-container">
                            <h3><b>Welcome to this page, choose any category on the navbar to continue</b></h3>
                            <h5> Steve Jobs <span class="w3-opacity"></span></h5>
                        </div>

                        <div class="w3-container">
                            <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.</p>
                            <div class="w3-row">
                                <div class="w3-col m8 s12">
                                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b><a href="/Profile">Go to Profile</a></b></button></p>
                                </div>
                                <div class="w3-col m4 w3-hide-small">
                                    <p><span class="w3-padding-large w3-right"><b><a href="/">↫ CV Overview</a></b> <span class="w3-tag"></span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div div class="w3-content" style={{ maxWidth: "1400px" }}>
                <div class="w3-col l8 s12">
                    <div class="w3-card-4 w3-margin w3-white" style={{ width: "145%" }}>
                        <div class="w3-container">
                            <h5> Hellen Keller <span class="w3-opacity"></span></h5>
                        </div>

                        <div class="w3-container">
                            <p>Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.</p>
                            <div class="w3-row">
                                <div class="w3-col m8 s12">
                                    <p><button class="w3-button w3-padding-large w3-white w3-border"><b><a href="/Profile">Go to Profile</a></b></button></p>
                                </div>
                                <div class="w3-col m4 w3-hide-small">
                                    <p><span class="w3-padding-large w3-right"><b><a href="/">↫ CV Overview</a></b> <span class="w3-tag"></span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cvinput;