import React from 'react';
import useDataAndAuth from '../Context/useDataAndAuth';
import ServiceCart from './ServiceCart';

const Services = () => {
    const { services } = useDataAndAuth()
   

    return (
      <div >
        <h1 className="fw-bold text-info my-5">Our Services</h1>
        <hr className="w-75 mx-auto" />
        <div className="row">
          
          {services.length &&
            services.map((service) => (
              <ServiceCart key={service.id} service={service}></ServiceCart>
            ))}
        </div>
      </div>
    );
};

export default Services;