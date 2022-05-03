import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  
  <div className="text-center mt-5">
    <div className="container">
    <h1 className="title animate__animated animate__fadeIn">Welcome, chosen one!</h1>
    <h3 className="animate__animated animate__fadeIn animate__delay-2s	">May the force be with you, always...</h3>
      <div className="row">
        <div className="cardsContainer">
          <div className=" col">
            <div className="card bg-dark animate__animated animate__fadeInRightBig">
              <img
                src="https://www.denofgeek.com/wp-content/uploads/2013/04/star_wars_1.jpg?fit=1280%2C800"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Characters</h5>
                <p className="card-text">
                  Check the best characters in the Star Wars universe! From Luke
                  Skywalker to the evil Darth Vader.
                </p>
                <Link to="/characters" className="btn btn-warning">
                  Go to Characters!
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark animate__animated animate__fadeInRightBig">
              <img
                src="https://scitechdaily.com/images/Kepler-16b-1-scaled.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Planets</h5>
                <p className="card-text">
                  The Star Wars story happens on a stretch of several and
                  hostile planets. Come check them out!
                </p>
                <Link to="/planets" className="btn btn-warning">
                  Go to Planets!
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark animate__animated animate__fadeInRightBig">
              <img
                src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vehicles</h5>
                <p className="card-text">
                  What is a republic pilot without his ship? How could Han
                  go across the galaxy without the Millenial Falcon?
                </p>
                <Link to="/vehicles" className="btn btn-warning">
                  Go to vehicles!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
