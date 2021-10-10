import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { sidebarContext } from './sidebarContext';
import { settingsContext } from './settingsContext';

const ClickedOutsideContext = React.createContext();

export function useClick() {
    return useContext(ClickedOutsideContext);
}

export function ClickedOutside({ children }) {
    const {setMenuActive} = useContext(sidebarContext);
    const {setSettingsMenu} = useContext(settingsContext);
    const dropDownMenuRef = useRef();
    const  sideBarRef = useRef();

    const handleClickOutsideDropDown = useCallback(
        (e) => {
            if(dropDownMenuRef.current.contains(e.target)) {
                return;
            } else {
                setSettingsMenu(false);
            }
        },
        [setSettingsMenu],
    );

    const handleClickOutsideSideBar = useCallback(
        (e) => {
            if(sideBarRef.current.contains(e.target)) {
                return;
            } else {
                setMenuActive(false);
            }
        },
        [setMenuActive],
    );

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutsideSideBar);
        
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClickOutsideSideBar);
        }
    },[handleClickOutsideSideBar]);

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutsideDropDown);
        
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClickOutsideDropDown);
        }
    },[handleClickOutsideDropDown]);


    const value = {
        dropDownMenuRef,
        sideBarRef
    }

    return (
        <ClickedOutsideContext.Provider value={value}>
            {children}
        </ClickedOutsideContext.Provider>
    )
}