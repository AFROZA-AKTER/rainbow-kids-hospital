import React, { useEffect, useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Expert.css'

const Expert = ({ expert }) => {
    const { id, name, graduate, img } = expert;

    return (
        <>
            <Col lg={3} md={6} className="mt-5">
                <Card className="text-center">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'purple' }}>{name}</Card.Title>
                        <Card.Text className="text-info">
                            {graduate}
                        </Card.Text>

                       
                            <Link  to={'/more/' + id}>
                                <Button  variant="btn btn-outline-info">More Info</Button>
                            </Link>
                       


                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default Expert;