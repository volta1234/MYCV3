import React from "react";

export default function CvInputNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Categories:</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/profile">Profile <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Lang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Education</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}