
import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ siservice }) => {
    const { service, img , info, id } = siservice;
    return (
        <>
            <Col lg={4} md={6} className="mt-5">
                <Card className="h-100">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'purple' }}>{service}</Card.Title>
                        <Card.Text className="">
                            {info.slice(0, 100)}
                        </Card.Text>
                            <Link  to={'/service/' + id}>
                                <Button  variant="btn btn-outline-info">View More</Button>
                            </Link>
                    </Card.Body>
                </Card>
            </Col>
            </>
    );
};
export default Service;