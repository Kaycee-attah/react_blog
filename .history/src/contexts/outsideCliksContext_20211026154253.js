import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { sidebarContext } from './sidebarContext';
import { settingsContext } from './settingsContext';

const ClickedOutsideContext = React.createContext();

export function useClick() {
    return useContext(ClickedOutsideContext);
}

export function ClickedOutsideProvider({ children }) {
    const {menuActive, setMenuActive} = useContext(sidebarContext);
    const {setSettingsMenu} = useContext(settingsContext);
    const dropDownMenuRef = useRef();
    const moreIconRef = useRef();
    const sideBarRef = useRef();
    const menuIconRef = useRef();
    const inputRef = useRef();
    const [inputActive, setInputActive] = useState("text-editor-container");

    const handleClickOutsideDropDown = useCallback(
        (e) => {
            if(dropDownMenuRef.current.contains(e.target)) {
                return;
            } else if(moreIconRef.current.contains(e.target)) {
                return;
            } else {
                setSettingsMenu(false);
            }
        },
        [setSettingsMenu],
    );

    const handleClickOutsideInputField = useCallback(
        (e) => {
            if(inputRef.current.contains(e.target)) {
                setInputActive("text-editor-container");
            } else {
                return;
            }
        },
        [setInputActive],
    );

    const handleClickOutsideSideBar = useCallback(
        (e) => {
            if(menuActive && sideBarRef.current.contains(e.target)) {
                return;
            } else if(menuIconRef.current.contains(e.target)) {
                return;
            } else {
                setMenuActive(false);
            }
        },
        [menuActive, setMenuActive],
    );

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClickOutsideInputField);
        
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClickOutsideInputField);
        }
    }, [handleClickOutsideInputField])

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
        sideBarRef,
        menuIconRef,
        moreIconRef,
        inputRef,
        inputActive,
        setInputActive
    }

    return (
        <ClickedOutsideContext.Provider value={value}>
            {children}
        </ClickedOutsideContext.Provider>
    )
}