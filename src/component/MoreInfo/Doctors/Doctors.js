import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
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


    }, [specialist]);

    const { name, img, description, sepcial } = doctorDetails;
    return (
        <>
        <Col  className="m-5 ">
            <Card className="h-100 w-50  text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: 'purple' }}>{name}</Card.Title>
                    <Card.Text className="text-info">Special:
                        {sepcial}
                    </Card.Text>
                    <Card.Text className="">
                        {description}
                    </Card.Text>
                       
                </Card.Body>
            </Card>
        </Col>
        </>

    );
};

export default Doctors;