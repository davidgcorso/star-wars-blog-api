import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    
}, []);

  return(
      <h1>Title</h1>
  )
}