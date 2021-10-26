import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div  className=" d-lg-flex bg-dark about-us p-5">
            <div className="m-4" >
                 <h2 className="">Contact Us</h2>
                 <div>
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                        </div>
                        <div>
                           <p>Spring Store London Oxford Street, 012 United <br /> Kingdom</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </div>
                        <div>
                            <p>Mobile: +00 1234 456789</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                            <p>Mail: rainbowkids@mail.com</p>
                        </div>
                     </div>
                  
                  
                  
                 </div>
                </div>
            <div className="m-4">
                 <h2 className="">Latest posts</h2>
                 <div className="text-center">
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faPlus} /> 
                        </div>
                        <div>
                           <p>24 hours service provided.</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div>
                            <p>plangent environment for your child</p>
                        </div>
                     </div>
                     <div className="info">
                        <div className="icon">
                           <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div>
                            <p>neat and clean environment.</p>
                        </div>
                     </div>  
                 </div>
                </div>
                    <div className="m-4">
                        <h2 className="">Follow Us</h2>
                        <div className="text-center">
                            <div className="info">
                                <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} /> 
                                </div>
                                <div>
                                <p>rainbowkids@facebook.com</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div>
                                    <p>rainbowkids@insta.com</p>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                <FontAwesomeIcon icon={faTwitter} />
                                </div>
                                <div>
                                    <p>rainbowkids@twitter.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div> 
    );
};

export default Footer;