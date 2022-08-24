import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const addToFavorites = (item) =>{

    store.planetsFavorites.push(item)
    console.log(store.planetsFavorites)
  }

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
          
             <button
            to={""}
            className="btn btn-outline-warning float-end"
            onClick={() => {addToFavorites(planet)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
          
        </div>
      </div>
    );
  });

  

  return (
    <>
      <h1 className="title text-center">Planets of Star Wars</h1>
	  <div className="planetsContainer animate__animated animate__fadeInRightBig">
		  {planetsList}
	  </div>
    

    </>
  );
};
