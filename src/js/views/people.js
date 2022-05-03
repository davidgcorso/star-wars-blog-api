import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const people = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let peopleList = store.people.results?.map((people, index) => {
    return (
      <div className="card" key={index}>
        <img src="https://www.latercera.com/resizer/SVYKp0VtlI6_8CBQU3wNMUYrlko=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DQELXIPCMBCEJFABKNMNRGG5OE.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{people.name}</h5>
          <p className="card-text">
          Climate: {people.info?.climate}
          </p>
          <Link to={'/people/' + people.uid} className="btn btn-primary" >
            Details
          </Link>
        </div>
      </div>
    );
  });

  console.log(store.people.results);

  return (
    <>
      <h1 className="title text-center">Characters of Star Wars</h1>
	  <div className="planetsContainer animate__animated animate__fadeInRightBig">
		  {peopleList}
	  </div>
    

    </>
  );
};
