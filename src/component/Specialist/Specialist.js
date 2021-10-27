import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import UseExpert from '../Hooks/UseExpert';
import useExpert from '../Hooks/UseExpert';
const Specialist = () => {
    const [specialist ] = UseExpert();

   
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