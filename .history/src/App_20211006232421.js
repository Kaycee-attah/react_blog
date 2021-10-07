import React, { useState } from "react";
import Navigation from "./components/navigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from "./page-renderer";

function App() {
  const [darkMode, setDarkMode] =useState(true)
  return (
    <Router>
      <div className={darkMode ? "App-darkMode" : "App-lightMode"}>
        <Navigation/>
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
 
  );
}

export default App;
