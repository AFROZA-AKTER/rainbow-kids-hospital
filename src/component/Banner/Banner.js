import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'



const Banner = () => {
    return (
            <>
                <Carousel className="img-fluid">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/slides/1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div>
                                <h1>Consultation</h1>
                                <h3>We Care for Your Kids</h3>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/slides/2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div>
                                <h1>Emergency care for</h1>
                                <h3>Women's and Kids</h3>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/slides/3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div>
                                <h1>Get Well Soon</h1>
                                <h3>A Play Full Area</h3>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
       



    );
};

export default Banner;