import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../Hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services] = useServices();
    const [serviceDetails, setServiceDetails] = useState({});
    useEffect(() => {
        if (services.length > 0) {
            const specificDetail = (services.find(service => service.id == serviceId));
            setServiceDetails(specificDetail);
        }

    }, [services]);

    const { service, img, info, id } = serviceDetails;
    
    return (
        <>
        <Col  className="m-5 ">
            <Card className="h-100 w-50  text-center">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: 'purple' }}>{service}</Card.Title>
                    <Card.Text className="">
                        {info}
                    </Card.Text>
                       
                </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default ServiceDetails;