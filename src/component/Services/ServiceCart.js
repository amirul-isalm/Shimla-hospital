import React from 'react';
import { useHistory } from 'react-router';
import "./Services.css"

const ServiceCart = (props) => {
    const service = props.service;
    const { id, name, title, thumbimg } = service;
    const history=useHistory()
    const clickDetails = () => {
        history.push(`/services/${id}`);
    }

    return (
        <div className="col-12 col-md-6 py-3  ">
            <div className="row mx-3 my-4 pt-3 w-75 mx-auto serviceCart">
                <div className="col-4">
                    <img className="img-fluid  rounded-3" src={thumbimg} alt="" />
                </div>
                <div className="col-8 text-start">
                    <h6 className="fw-bold">{name}</h6>
                    <small>{title}</small>
                    <br />
                    <br />
                    <button onClick={clickDetails}> Details</button>
                </div>
                
           </div>
        </div>
    );
};

export default ServiceCart;