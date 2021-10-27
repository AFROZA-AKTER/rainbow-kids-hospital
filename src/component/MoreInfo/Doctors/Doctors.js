import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AppoinmentForm from '../../AppoinmentForm/AppoinmentForm';
import UseExpert from '../../Hooks/UseExpert';
import useExpert from '../../Hooks/UseExpert';

const Doctors = () => {
    const { doctorId } = useParams();
    const [specialist] = UseExpert();
    const [doctorDetails, setDoctorDetails] = useState({});

    useEffect(() => {
        if (specialist.length) {
            setDoctorDetails(specialist.find(doctor => doctor.id === parseInt(doctorId)));

        }


    }, [doctorId, specialist]);

    const { name, img, description, special } = doctorDetails;
    return (
        <div className="text-center m-5">

            <h1>More details of Doctor ID :{doctorId}</h1>
            <h3>Please fill up the following form for appoinment</h3>
            <AppoinmentForm></AppoinmentForm>
        </div>

    );
};

export default Doctors;