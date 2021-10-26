import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Appoinment = () => {
    const history = useHistory();

    const handleAppoinment = () => {
        history.push('/appoinmentForm')
    }
    return (
        <div id="appoinment" className="d-lg-flex  mt-5">
            <div className=" mx-5 my-5 w-50  ">
                <h1 className="">We are FULLY<br />CONCERN AND <br /> DEDICATED TO YOU</h1>
                <p className="">Appointment scheduling systems are used by primary and specialty care    clinics to manage access to service providers, as well as by
                    hospitals to schedule elective surgeries. Many factors affect the performance of appointment systems including arrival and service
                    time variability, patient and provider preferences, available information technology and the experience level of the scheduling staff.
                    In addition, a critical bottleneck lies in the application of Industrial Engineering and Operations Research (IE/OR) techniques. </p>
                <Link onClick={handleAppoinment}  class="btn btn-info fs-6  px-4 py-2" to="/appoinmentForm" role="button">APPOINMENT</Link>
            </div>
            <div className="m-5">
                <img className="w-100" src="https://images.freeimages.com/images/premium/previews/5423/54238130-indian-doctor-handshake-with-her-patient.jpg" alt="" />
            </div>
        </div>


    );
};

export default Appoinment;