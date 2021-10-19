import React from 'react';
import "./Expart.css"

const ExpartCart = ({ expart }) => {
    const { name, designation, dgree, image } = expart;
    return (
      <div className="col-12 col-md-6  col-lg-4">
        <div className="expartCart  m-4 ">
          <img className=" w-100  my-1 rounded-3 " src={image} alt="" />
          <h5>{name}</h5>
          <p className="mb-0">{dgree}</p>
          <small>{designation}</small>
        </div>
      </div>
    );
};

export default ExpartCart;