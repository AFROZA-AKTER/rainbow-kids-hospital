import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
const Specialist = () => {
    const [specialist , setSpecialist] = useState([])
    useEffect(() => {
        fetch('specialist.json')
            .then(res => res.json())
            .then(data => setSpecialist(data));
    }, [])
    return (
        <div id="specialist" className="container">
          <h1 className="mt-5 text-center">Our Specialist</h1>
          <div className="row specialist-container">
              {
                  specialist.map(expert =><Expert 
                  key={expert.id}
                  expert={expert}
                  ></Expert>)
              }
          </div>
        </div>
    );
};

export default Specialist;