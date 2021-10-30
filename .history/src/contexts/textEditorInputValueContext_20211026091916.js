import React, { useContext, useState } from 'react';

const TextEditorInputValueContext = React.createContext();

export function useTextEditorInputValue() {
    return useContext(TextEditorInputValueContext);
}

export function TextEditorProvider({ children }) {
    const [textEditorInputValue, setTextEditorInputValue] = useState('');
    const [blogTitleInputValue, setBlogTitleInputValue] = useState('');
    const [categorySelected, setCategorySelected] = useState('Select a Category');
    const [image, setImage] = useState();
    const [popUpClose, setPopUpClose] = useState(false);

    function handleDelete() {
        setTextEditorInputValue('');
        setBlogTitleInputValue('');
        setCategorySelected('Select a Category');
        setImage();
        setPopUpActive(true)
        // console.log('working')
    }
 


    const value = {
        textEditorInputValue,
        blogTitleInputValue,
        categorySelected,
        image,
        popUpClose,
        setTextEditorInputValue,
        setBlogTitleInputValue,
        setCategorySelected,
        setImage,
        setPopUpClose,
        handleDelete
    }

    return (
        <TextEditorInputValueContext.Provider value={value}>
            {children}
        </TextEditorInputValueContext.Provider>
    )
}