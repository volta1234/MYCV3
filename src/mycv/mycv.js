import "./mycv.css"
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const Mycv = () => {
    const cvRef = useRef(null);

    const handleDownload = async () => {
        const confirmed = window.confirm("Are you sure you want to download the PDF?");
        if (confirmed) {
            const element = cvRef.current;
            const downloadButton = element.querySelector('.download-button');
            downloadButton.style.display = 'none';

            try {
                const opt = {
                    margin: 10,
                    filename: 'Levina Osiemo CV2.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                };

                await html2pdf().set(opt).from(element).save();
            } catch (error) {
                console.error('Error generating PDF:', error);
            }

            downloadButton.style.display = 'block';
        }
    };
    return (
        <div>
            <div ref={cvRef}>
                <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
                    <div className="w3-row-padding">
                        <div className="w3-third">

                            <div className="w3-white w3-text-grey w3-card-4">
                                <div className="w3-display-container">
                                    {/* <img src="/w3images/avatar_hat.jpg" style={{width:"100%"}} alt="Avatar"/> */}
                                    <div className=" w3-container w3-text-grey">
                                        <h2>Levina osiemo</h2>
                                    </div>
                                </div>
                                <div className="w3-container">
                                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Journalist</p>
                                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Nairobi, Kenya</p>
                                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>oderalevina2@gmail.com</p>
                                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+254710477950</p>


                                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                                    {/* <p>Adobe Photoshop</p>
                                    <div className="w3-light-grey w3-round-xlarge w3-small">
                                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "90%" }}>90%</div>
                                    </div> */}
                                    <p>Photography</p>
                                    <div className="w3-light-grey w3-round-xlarge w3-small">
                                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "80%" }}>
                                            <div className="w3-center w3-text-white">80%</div>
                                        </div>
                                    </div>
                                    <p>Media</p>
                                    <div className="w3-light-grey w3-round-xlarge w3-small">
                                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "80%" }}>80%</div>
                                    </div>
                                    <p>Illustrator</p>
                                    <div className="w3-light-grey w3-round-xlarge w3-small">
                                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "75%" }}>75%</div>
                                    </div>
                                    <p>Adobe premier pro</p>
                                    <div className="w3-light-grey w3-round-xlarge w3-small">
                                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: "70%" }}>70%</div>
                                    </div>


                                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                                    <p>English</p>
                                    <div className="w3-light-grey w3-round-xlarge">
                                        <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "100%" }}></div>
                                    </div>
                                    <p>Swahili</p>
                                    <div className="w3-light-grey w3-round-xlarge">
                                        <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "55%" }}></div>
                                    </div>
                                    {/* <p>German</p>
                                <div className="w3-light-grey w3-round-xlarge">
                                    <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: "25%" }}></div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w3-twothird">

                            <div className="w3-container w3-card w3-white w3-margin-bottom">
                                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                                <div className="w3-container">
                                    <h5 className="w3-opacity"><b>News Reporter - Dala FM, Kisumu</b></h5>
                                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i> April 2022 - <span className="w3-tag w3-teal w3-round">July 2022</span></h6>
                                    <ul>
                                        <li>Enhanced live news coverage by providing real-time updates and analysis during significant events.</li>
                                        <li>Boosted audience engagement by delivering compelling stories using various multimedia formats such as video, audio and written content.</li>
                                        <li>Streamlined reporting processes with effective time management skills, meting time deadlines consistently without compromising quality.</li>
                                        <li>Elevated news reports by incorporating data visualization tools to present complex information in an easily digestible format for readers and viewers.</li>
                                    </ul>
                                </div>
                                <div className="w3-container">
                                    <h5 className="w3-opacity"><b>Sales and Marketing - Superlife World, Nairobi</b></h5>
                                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i> August 2018 - <span className="w3-tag w3-teal w3-round">June 2023</span></h6>
                                    <ul>
                                        <li>Built marketing teams and sold many units of health products provided.</li>
                                        {/* <li>Boosted audience engagement by delivering compelling stories using various multimedia formats such as video, audio and written content.</li>
                                    <li>Streamlined reporting processes with effective time management skills, meting time deadlines consistently without compromising quality.</li>
                                    <li>Elevated news reports by incorporating data visualization tools to present complex information in an easily digestible format for readers and viewers.</li> */}
                                    </ul>
                                </div>
                                {/* <div className="w3-container">
                                <h5 className="w3-opacity"><b>Web Developer / something.com</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>
                                <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>

                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div> */}
                            </div>

                            <div className="w3-container w3-card w3-white">
                                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                <div className="w3-container">
                                    <h5 className="w3-opacity"><b>University of Nairobi, Nairobi</b></h5>
                                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i> 2017 - <span className="w3-tag w3-teal w3-round">Present</span></h6>
                                    <p>Bachelor of Arts (Journalism and Mass communication)</p>

                                </div>
                                {/* <div className="w3-container">
                                <h5 className="w3-opacity"><b>London Business School</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
                                <p>Master Degree</p>

                            </div>
                            <div className="w3-container">
                                <h5 className="w3-opacity"><b>School of Coding</b></h5>
                                <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>
                                <p>Bachelor Degree</p>
                            </div> */}
                            </div>
                        </div>
                    </div>


                    <footer>
                        {/* <p>Find me on social media.</p>
                        <i className="fa fa-facebook-official w3-hover-opacity"></i>
                        <i className="fa fa-instagram w3-hover-opacity"></i>
                        <i className="fa fa-snapchat w3-hover-opacity"></i>
                        <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                        <i className="fa fa-twitter w3-hover-opacity"></i>
                        <i className="fa fa-linkedin w3-hover-opacity"></i> */}
                        {/* <p>Powered by <a >Volta Group of Companies</a></p> */}
                        <a style={{ marginLeft: "15px", color: "grey", opacity: "0.3" }}>Powered by: VoltaGroupofCompanies: Copyright@2024</a>
                    </footer>
                </div>
                <div class="pos-f-t">

                    <nav class="navbar navbar-dark bg-dark">
                        <button type="button" style={{ marginLeft: "30%", width: "500px" }} className="btn btn-light download-button" onClick={handleDownload}>Download CV PDF</button>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default Mycv;