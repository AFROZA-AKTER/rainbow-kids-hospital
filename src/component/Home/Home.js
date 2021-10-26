import React from 'react';
import Treatment from '../../Treatment/Treatment';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import About from '../About/About'


import Specialist from '../Specialist/Specialist';
import Gallery from '../Gallery/Gallery';
const Home = () => {
    return (
        <div  id="home">
            <Banner></Banner>
            <About></About>
            <Treatment></Treatment>
            <Specialist></Specialist>
            <Gallery></Gallery>
            <Appoinment></Appoinment>

        </div>
    );
};

export default Home;