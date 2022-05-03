import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let planetsList = store.planets.results?.map((planet, index) => {
    return (
      <div className="card" key={index}>
        <img src="https://images.immediate.co.uk/production/volatile/sites/4/2018/08/eso0603a-b364432.jpg?quality=90&resize=700,466" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">
          Climate: {planet.info?.climate}
          </p>
          <Link to={'/planets/' + planet.uid} className="btn btn-primary" >
            Details
          </Link>
        </div>
      </div>
    );
  });

  console.log(store.planets.results);

  return (
    <>
      <h1 className="title text-center">Planets of Star Wars</h1>
	  <div className="planetsContainer animate__animated animate__fadeInRightBig">
		  {planetsList}
	  </div>
    

    </>
  );
};
