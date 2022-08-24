import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const addToFavorites = (item) =>{

    store.peopleFavorites.push(item)
    console.log(store.peopleFavorites)
  }
  let peopleList = store.people.results?.map((people, index) => {
    return (
      <div className="card" key={index}>
        <img src="https://www.latercera.com/resizer/SVYKp0VtlI6_8CBQU3wNMUYrlko=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/DQELXIPCMBCEJFABKNMNRGG5OE.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{people.name}</h5>
          <p className="card-text">
          
          </p>
          <Link to={'/people/' + people.uid} className="btn btn-primary" >
            Details
          </Link>
          <button
            to={""}
            className="btn btn-outline-warning float-end"
            onClick={() => {addToFavorites(people)}}
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
      <h1 className="title text-center">Characters of Star Wars</h1>
	  <div className="planetsContainer animate__animated animate__fadeInRightBig">
		  {peopleList}
	  </div>
    

    </>
  );
};
