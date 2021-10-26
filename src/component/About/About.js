import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import './About.css'
import Gallery from '../Gallery/Gallery';


const About = () => {
    const history = useHistory();
    const handleMoreInfo = () => {
        history.push('/gallery')
    }
    return (
        <div id="about" className="container mt-5">
            <div className="text-center" >
                <h1>We are awesome TEAM</h1>
                <h6> <span className="text-info fs-5"> Rainbow kids hospital</span> is one of the recognize hospital Anostra laoreeta quisque suspendisse volutpat egestas <br />  fringilla convallis porta scelerisque a dapibus ridiculus mus parturient massa parturient parturient.  <br /> Turpis lacinia lorem nisi penatibus eros a aptent vel nec fames dui duis cum fedese.</h6>
            </div>
            <div className="d-lg-flex  mt-5 text-info">
                <div className="">
                    <img className="w-100" src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/section-image-1.png" alt="" />
                </div>

                <div className=" mx-5 my-2">
                    <div className="d-flex p-2">
                        <div className=""><FontAwesomeIcon icon={faCheck} /></div>
                        <h6 className="px-2">we try to our best treatment for our patients.</h6>
                    </div>
                    <div className="d-flex p-2">
                        <div><FontAwesomeIcon icon={faCheck} /></div>
                        <h6 className="px-2">Expert doctors are provided according to your needs.</h6>
                    </div>
                    <div className="d-flex p-2">
                        <div><FontAwesomeIcon icon={faCheck} /></div>
                        <h6 className="px-2">neat and clean environment.</h6>
                    </div>
                    <div className="d-flex p-2">
                        <div><FontAwesomeIcon icon={faCheck} /></div>
                        <h6 className="px-2">24 hours service provided.</h6>
                    </div>
                    <div className="d-flex p-2">
                        <div><FontAwesomeIcon icon={faCheck} /></div>
                        <h6 className="px-2">plangent environment for your child</h6>
                    </div>
                </div>

            </div>
            <div className="text-center">
                <Link to="/gallery">
                    <Button onClick={handleMoreInfo} variant="btn btn-info fs-5 m-5 px-4 py-2" className="">More Info</Button>
                </Link>

            </div>

        </div>
    );
};

export default About;