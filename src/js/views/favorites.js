import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let favoriteVehiclesList = store.vehiclesFavorites?.map((favorite, index) => {
    return (
      <div className="card">
        <h3>{favorite.name}</h3>
        <span>
          <Link
            to={"/vehicles/" + favorite.uid}
            className="btn btn-outline-primary"
          >
            Details
          </Link>
        </span>
      </div>
    );
  });
  let favoritePlanetsList = store.planetsFavorites?.map((favorite, index) => {
    return (
      <div className="card">
        <h3>{favorite.name}</h3>
        <span>
          <Link
            to={"/planets/" + favorite.uid}
            className="btn btn-outline-primary"
          >
            Details
          </Link>
        </span>
      </div>
    );
  });
  let favoritePeopleList = store.peopleFavorites?.map((favorite, index) => {
    return (
      <div className="card">
        <h3>{favorite.name}</h3>
        <span>
          <Link
            to={"/people/" + favorite.uid}
            className="btn btn-outline-primary"
          >
            Details
          </Link>
        </span>
      </div>
    );
  });

  return (
    <>
      <h1 className="title text-center">Favorites</h1>
      <div className="planetsContainer animate__animated animate__fadeInRightBig">
        {favoriteVehiclesList}
      </div>
      <div className="planetsContainer animate__animated animate__fadeInRightBig">
        {favoritePlanetsList}
      </div>
      <div className="planetsContainer animate__animated animate__fadeInRightBig">
        {favoritePeopleList}
      </div>
    </>
  );
};
