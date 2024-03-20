import React from "react";

function Navbar() {

    return (
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <button type="button" class="btn btn-light"><a href="/">My CV Overview</a></button>
                    {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
                </div>
            </div>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <button type="button" class="btn btn-light"><a href="/cvinput">Customize My CV</a></button>
                    {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;