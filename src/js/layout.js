import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Vehicles } from "./views/vehicles";
import { VehicleDetails } from "./views/vehicledetails";
import { Home } from "./views/home";

import { Planets } from "./views/planets";
import injectContext from "./store/appContext";
import "animate.css";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetDetails } from "./views/planetdetails";


import { People } from "./views/people";
import { Favorites } from "./views/favorites";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/people">
              <People />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path={`/planets/:id`}>
              <PlanetDetails />
            </Route>
            <Route exact path={`/vehicles/:id`}>
              <VehicleDetails />
            </Route>
            <Route>
              <h1 className="title text-center">Not found!</h1>
              <div className="itemDescription">
                <p className="paragraph card">
                  Our ewoks are working hard on finding the page you wanted, but
                  failed. <br /> Dont worry though, we got rid of them...
                </p>
              </div>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
