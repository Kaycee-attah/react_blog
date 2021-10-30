import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PageRenderer from "./page-renderer";
import { usersSelectedModeContext } from "./contexts/usersSelectedModeContext";
import { sidebarContext } from "./contexts/sidebarContext";
import { settingsContext } from "./contexts/settingsContext";
import { SwipeProvider } from "./contexts/swipeContext";
import { ClickedOutsideProvider } from "./contexts/outsideCliksContext";
import { ScrolledProvider } from "./contexts/scrollContext";
import { TextEditorProvider } from './contexts/textEditorInputValueContext';
import { LiveChat } from './components/LiveChat';
import Footer from "./components/footer";

function App() {
  const [darkMode, setDarkMode] =useState(getInitialMode());
  const [menuActive, setMenuActive] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(false);
  const [moreIconSettingsMenu, setMoreIconSettingsMenu] = useState(false);
  
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
          <sidebarContext.Provider value={{menuActive, setMenuActive}}>
            < settingsContext.Provider value={{settingsMenu, moreIconSettingsMenu, setSettingsMenu, setMoreIconSettingsMenu}} >
              <ClickedOutsideProvider>
                <SwipeProvider>
                  <ScrolledProvider>
                    <TextEditorProvider>
                      <Navigation/>
                      <Switch>
                        <Route path="/:page" component={PageRenderer}/>
                        <Route path="/" render={() => <Redirect to="/home" />} />
                        <Route component={() => 404} />
                      </Switch>
                      <LiveChat />
                      <Footer />
                    </TextEditorProvider>
                  </ScrolledProvider>
                </SwipeProvider>
              </ClickedOutsideProvider>
            </settingsContext.Provider>
          </sidebarContext.Provider>
        </usersSelectedModeContext.Provider>
      </div>
    </Router>
 
  );
}

export default App;
