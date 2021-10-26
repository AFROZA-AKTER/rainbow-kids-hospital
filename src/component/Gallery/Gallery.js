import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="mt-5">
             <div className="text-center" >
                <h1>Our Gallery</h1>
                <h6>There are some gallery of  <span className="text-info fs-5">RainBow Kids Hospital</span> about our success. one of the recognize hospital  <br /> Anostra laoreeta quisque suspendisse volutpat egestas  fringilla convallis porta scelerisque  a dapibus ridiculus mus parturient massa  <br /> parturient parturient. Turpis lacinia lorem nisi penatibus eros a aptent vel nec fames dui duis cum fedese.</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5 m-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/1.jpg" className="card-img-top" alt="..."/>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/2.jpg" className="card-img-top" alt="..."/>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/3.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/4.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/5.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/6.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/7.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/8.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;