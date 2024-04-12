import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mycv2.css'; // Import your custom CSS for background styling
import BowTieIcon from './bowtieicon';

function Mycv2() {
    return (
        <div className="container-fluid mt-5 bg-black">
            <div className="row">
                <div>
                    <h1>Bow Tie Icon</h1>
                    <BowTieIcon width={100} height={100} color="purple" />
                </div>
                <div className='title' style={{
                    color: "white",
                    height: "50px",
                    padding: "3px"
                }}>
                    <h1 style={{
                        fontSize: "2.5rem",
                        fontWeight: "900",
                        marginLeft: "10%",
                        opacity: "0.9"
                    }}>GRACE MWIA MULI</h1>
                </div>
                {/* <div className="col-md-4">tag</div> */}
                <div className="col-md-4">
                    {/* <div className="tag-container">
                        <span className="tag text-light-purple">TAG</span>
                    </div> */}
                    <div className="card bg-transparent border-grey">
                        <div className="card-header bg-transparent border-grey">
                            <h5 className="text-light-purple">Contacts</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <p>Email: john.doe@example.com</p>
                            <p>Phone: +1 234 567 890</p>
                            <p>Address: 123 Street, City, Country</p>
                        </div>
                    </div>
                    <div className="card mt-3 bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Skills</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <ul>
                                <li>Programming</li>
                                <li>Communication</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mt-3 bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Languages</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <ul>
                                <li>English</li>
                                <li>French</li>
                                <li>Spanish</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mt-3 bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Volunteer Experience</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <p>Organization: XYZ</p>
                            <p>Role: Volunteer</p>
                            <p>Duration: MM/YYYY - MM/YYYY</p>
                        </div>
                    </div>
                    <div className="card mt-3 bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Professional Memberships</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <p>Organization: ABC</p>
                            <p>Membership Type: Professional</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 border-left border-gray">
                    <div className="card bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Experience</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <h6>Software Developer</h6>
                            <p>Company Name, MM/YYYY - MM/YYYY</p>
                            <ul>
                                <li>Responsibility 1</li>
                                <li>Responsibility 2</li>
                                <li>Responsibility 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mt-3 bg-transparent border-light-purple">
                        <div className="card-header bg-transparent border-light-purple">
                            <h5 className="text-light-purple">Education</h5>
                        </div>
                        <div className="card-body" style={{ color: "white", opacity: "0.7" }}>
                            <h6>Bachelor of Science in Computer Science</h6>
                            <p>University Name, Graduation Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mycv2;
