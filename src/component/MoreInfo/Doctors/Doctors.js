import React from 'react';
import {useParams} from 'react-router'; 
import AppoinmentForm from '../../AppoinmentForm/AppoinmentForm';

const Doctors = () => {
    const {doctorId} = useParams();
    return (
        <div className="text-center m-5"> 
         
            <h1>More details of Doctor ID :{doctorId}</h1>
            <h3>Please fill up the form below to know about that doctor</h3>
            <AppoinmentForm></AppoinmentForm>
        </div>
    );
};

export default Doctors;