import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from "./page-renderer";
import {usersSelectedModeContext} from "./contexts/usersSelectedModeContext";
import {Sidebar} from "./contexts/sidebarContext";
import Swipe from 'react-easy-swipe';

function App() {
  const [darkMode, setDarkMode] =useState(getInitialMode());
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // return () => {
    //     cleanup
    // }
}, [darkMode])

function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || false;
};
  return (
    <Router>
      <div className={darkMode ? "App-darkMode" : "App-lightMode"}>
        <usersSelectedModeContext.Provider value={{darkMode, setDarkMode}}>
          <Sidebar.Provider value={{menuActive, setMenuActive}}>
            <Navigation/>
            <Switch>
              <Route path="/:page" component={PageRenderer} />
              <Route path="/" render={() => <Redirect to="/home" />} />
              <Route component={() => 404} />
            </Switch>
          </Sidebar.Provider>
        </usersSelectedModeContext.Provider>
      </div>
    </Router>
 
  );
}

export default App;
