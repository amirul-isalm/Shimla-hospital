import React from 'react';
import useDataAndAuth from '../Context/useDataAndAuth';
import ExpartCart from './ExpartCart';

const Exparts = () => {
    const { exparts } = useDataAndAuth()
    
    return (
      <div className="row w-75  mx-auto">
        <h1 className="text-info fw-bold pt-4  pb-2">Our Experts</h1>
        <hr className="w-75 mx-auto" />

        {exparts.length &&
          exparts.map((expart) => (
            <ExpartCart key={expart.id} expart={expart}></ExpartCart>
          ))}
      </div>
    );
};

export default Exparts;