import React, { useState } from "react";
import Navigation from "./components/navigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from "./page-renderer";
import {usersSelectedModeContext} from "./contexts/usersSelectedModeContext";

function App() {
  const [darkMode, setDarkMode] =useState(false)
  return (
    <Router>
      <div className={darkMode ? "App-darkMode" : "App-lightMode"}>
        <usersSelectedModeContext.Provider value={darkMode, setDarkMode}>
          <Navigation/>
          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>
        </usersSelectedModeContext.Provider>
      </div>
    </Router>
 
  );
}

export default App;
