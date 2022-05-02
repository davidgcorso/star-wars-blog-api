import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let vehiclesList = store.vehicles.results?.map((vehicle, index) => {
    return (
      <div className="card bg-dark" key={index}>
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">
          uid: {vehicle.uid}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });

  console.log(store.vehicles.results);

  return (
    <>
      <h1 className="title text-center">Ships of Star Wars</h1>
	  <div className="vehiclesContainer">
		  {vehiclesList}
	  </div>
      
    </>
  );
};