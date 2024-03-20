import React from "react";
import "./cvinput.css"

export default function Profile() {
    const handleProfile = (event) => {
        event.preventDefault();
    };
    return (
        <div class="container">
            <form onSubmit={handleProfile} action="/action_page.php">
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Full Name</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="fname" name="fullname" placeholder="Your full name.." />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="lna                        me">Occupation</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" name="occupation" placeholder="Your occupation.." />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">Your Location</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="lname" name="location" placeholder="Nairobi, Kenya" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">Email Address</label>
                    </div>
                    <div class="col-75">
                        <input type="email" id="lname" name="email" placeholder="abcdefghi2@gmail.com" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="country">Phone Number</label>
                    </div>
                    <div class="col-75">
                        <input type="number" id="lname" name="phone" placeholder="+254746909633" />
                    </div>
                </div>

                <div class="row">
                    <input type="submit" value="Submit" />
                    <button type="submit">next(skills)</button>
                </div>
            </form>
            <footer>
                <a style={{ marginLeft: "15px", color: "grey", opacity: "0.3" }}>Powered by: VoltaGroupofCompanies: Copyright@2024</a>
            </footer>
        </div>
    )
}