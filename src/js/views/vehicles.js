import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let vehiclesList = store.vehicles.results?.map((vehicle, index) => {
    return (
      <div className="card" key={index}>
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-ships-blog-image-16x9.jpg.adapt.crop16x9.575p.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">uid: {vehicle.uid}</p>
          <Link
            to={"/vehicles/" + vehicle.uid}
            className="btn btn-outline-primary"
          >
            Details
          </Link>
          <Link
            to={""}
            className="btn btn-outline-warning d-flex justify-content-end"
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
          </Link>
        </div>
      </div>
    );
  });

  console.log(store.vehicles.results);

  return (
    <>
      <h1 className="title text-center">Ships of Star Wars</h1>
      <div className="planetsContainer animate__animated animate__fadeInLeftBig">
        {vehiclesList}
      </div>
    </>
  );
};
