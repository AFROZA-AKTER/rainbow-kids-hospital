import React from 'react';
import location from '../../image/location.png';
import phone from '../../image/phone.png';
import mail from '../../image/mail.png';
import aboutImg from '../../image/about.jpg';
const Contact = () => {
    return (

        <div className="container text-center text-muted mt-5 p-5">
            <h1 className='text-center'>Contact us</h1>
            <div>
                <div className="d-flex justify-content-between mb-5">
                    <div className="">
                        <img className="w-100 " src={aboutImg} alt="" />
                    </div>
                </div>

                <div>
                    <h1>we are take care </h1>
                </div>
            </div>

            <  div >
                <h2>For more information</h2>
                <p>Simple way to connect us</p>
            </div >
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div>
                    <img src={location} className="w-25 h-50" alt="" />
                    <h4>Address</h4>
                    <p>1207 , Mohammadpur</p>
                </div>
                <div>
                    <img src={phone} className="w-25 h-50" alt="" />
                    <h4>Phone</h4>
                    <p>+09258462514</p>
                </div>
                <div>
                    <img src={mail} className="w-25 h-50" alt="" />
                    <h4>Email</h4>
                    <p>Sunnah@mail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;