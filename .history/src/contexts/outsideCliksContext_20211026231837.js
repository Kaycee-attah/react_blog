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
    const textEditorInputRef = useRef();
    const reactQuillRef = useRef();
    const categoriesRef = useRef();
    const [categoriesDropdownActive, setCategoiesDropdownActive] = useState(false);
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

    const handleClickOutsideCategoriesDropDown = useCallback(
        (e) => {
            if(categoriesRef.current === undefined) {
                return;
            } else if(categoriesRef.current === null) {
                return;
            } else if(categoriesRef.current.contains(e.target)) {
                return;
            } else {
                setCategoiesDropdownActive(false);
            }
        },
        [setCategoiesDropdownActive],
    );

    const handleClickOutsideInputField = useCallback(
        (e) => {
            if((textEditorInputRef.current === undefined) || (inputRef.current === undefined)) {
                return;
            } else if((textEditorInputRef.current === null) || (inputRef.current === null)) {
                return;
            } else if((textEditorInputRef.current.contains(e.target)) || ((inputRef.current.contains(e.target)))) {
                return;
            } else {
                setInputActive("text-editor-container");
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
        document.addEventListener("mousedown", handleClickOutsideSideBar);
        document.addEventListener("mousedown", handleClickOutsideDropDown);
        document.addEventListener("mousedown", handleClickOutsideCategoriesDropDown);
        // document.addEventListener("mousedown", handleClickOutsideTextEditorInputField)
        
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClickOutsideInputField);
          document.removeEventListener("mousedown", handleClickOutsideSideBar);
          document.removeEventListener("mousedown", handleClickOutsideDropDown);
          document.removeEventListener("mousedown", handleClickOutsideCategoriesDropDown);
        //   document.removeEventListener("mousedown", handleClickOutsideTextEditorInputField);
        }
    }, [handleClickOutsideInputField, handleClickOutsideSideBar, handleClickOutsideDropDown, handleClickOutsideCategoriesDropDown])

    const value = {
        dropDownMenuRef,
        sideBarRef,
        menuIconRef,
        moreIconRef,
        inputRef,
        categoriesRef,
        textEditorInputRef,
        reactQuillRef,
        inputActive,
        categoriesDropdownActive,
        setInputActive,
        setCategoiesDropdownActive
    }

    return (
        <ClickedOutsideContext.Provider value={value}>
            {children}
        </ClickedOutsideContext.Provider>
    )
}