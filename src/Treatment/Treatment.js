import React from 'react';
import './Treatment.css'

const Treatment = () => {
    return (
        <div id="treatment" className="mt-5">
            <div className="text-center" >
                <h1>We Care For YOU</h1>
                <h6> <span className="text-info fs-5"> Rainbow kids hospital</span> Some helpful tips for the care of your offspring loved ones. Remember, We Care For <br /> You is your one stop hospital for services tailored to your needs, We take pride in our work!</h6>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 m-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/7.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title" style={{color:'purple'}}>Women Care</h5>
                        <p className="card-text">Prenatal care is health care that a woman gets while pregnant. Going early and regularly for prenatal care can help moms-to-be — and their babies — stay healthy. Regular care lets doctors find and deal with any problems as soon as possible.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/works/8.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title" style={{color:'purple'}}>Children Care</h5>
                        <p className="card-text">Children’s Health Care of Newburyport and Haverhill provides comprehensive pediatric health care from birth through adolescence. Our full-circle approach covers preventative care, urgent care, and specialist referrals.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://webthemez.com/demo/rainbow-children-hospital-bootstrap-website-template/img/service3.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title" style={{color:'purple'}}>Emergency Care</h5>
                        <p className="card-text">All around the world, acutely ill and injured people seek care every day.  Frontline providers manage children and adults with medical, surgical and obstetric emergencies, including injuries and infections, heart attacks and strokes, asthma and acute complications of pregnancy.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Treatment;