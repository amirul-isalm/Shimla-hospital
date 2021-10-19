import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useDataAndAuth from "../Context/useDataAndAuth";

const ServicesDetais = () => {
  const [matchService, setMatchService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        const target = data.find((service) => service.id === parseInt(id));
        setMatchService(target);
      });
  }, [id]);

  const { name, title, details, image1, image2, image3, image4 } = matchService;

  return (
    <div className="row">
      <div className="col-10 col-md-10 mx-auto text-start py-5">
        <h1 className="fw-bold">{name}</h1>
              <h4>{title}</h4>
              <p>{details}</p>
              <div className="row py-4">

<div className="col-12 col-md-5 col-lg-3"> <img className="img-fluid rounded-3 mb-3 " src={image1} alt="" /> </div>
<div className="col-12 col-md-5 col-lg-3"> <img className="img-fluid rounded-3 mb-3 " src={image2} alt="" /> </div>
<div className="col-12 col-md-5 col-lg-3"> <img className="img-fluid rounded-3 mb-3 " src={image3} alt="" /> </div>
<div className="col-12 col-md-5 col-lg-3"> <img className="img-fluid rounded-3 mb-3 " src={image4} alt="" /> </div>











              </div>
      </div>
    </div>
  );
};

export default ServicesDetais;
