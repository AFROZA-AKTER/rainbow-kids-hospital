import React from 'react';
import useServices from '../component/Hooks/useServices';
import Service from '../Service/Service';
import './Treatment.css'

const Treatment = () => {
    const [services] = useServices()
    return (
        <div id="treatment" className="mt-5">
            <div className="text-center" >
                <h1>We Care For YOU</h1>
                <h6> <span className="text-info fs-5"> Rainbow kids hospital</span> Some helpful tips for the care of your offspring loved ones. Remember, We Care For <br /> You is your one stop hospital for services tailored to your needs, We take pride in our work!</h6>
            </div>
            <div className="row m-5">
                {
                    services.map(siservice => <Service siservice={siservice} key={siservice.id} />)
                }
            </div>

        </div>
    );
};

export default Treatment;