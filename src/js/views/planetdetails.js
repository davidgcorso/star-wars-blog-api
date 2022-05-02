import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getSinglePlanet(params.id);
  }, []);
  // console.log(store.planets.results[0].name)
  return (
    <>
      <h1 className="title text-center">
        {store.singlePlanet?.result.properties.name}
      </h1>
    </>
  );
};
