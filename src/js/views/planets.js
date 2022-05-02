import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<h1 className="title text-center">Planets of Star Wars</h1> 
	)
		
	
};

