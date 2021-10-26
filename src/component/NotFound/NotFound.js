import React from 'react';
import './NotFound.css';
import notfound from '../../image/404.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className="notFound">
            <img style={{width:'100%'}} src={notfound} alt="" />
            <Link to="/"><Button variant="btn btn-outline-info m-5">Back</Button>
            </Link>
        </div>



    );
};

export default NotFound;