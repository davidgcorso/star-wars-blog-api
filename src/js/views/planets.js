import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let planetsList = store.planets.results?.map((planet, index) => {
    return (
      <div className="card bg-dark" key={index}>
        <img src="https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest?cb=20201111174744" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">
          Climate: {planet.climate}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });

  console.log(store.planets.results);

  return (
    <>
      <h1 className="title text-center">Planets of Star Wars</h1>
	  <div className="planetsContainer">
		  {planetsList}
	  </div>
      
    </>
  );
};
