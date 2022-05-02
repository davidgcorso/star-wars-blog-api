import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	return <h1 className="title text-center">Vehicles</h1>
	
	
};
