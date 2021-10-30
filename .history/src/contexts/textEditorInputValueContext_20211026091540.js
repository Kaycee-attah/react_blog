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

    function handleDelete() {
        // setTextEditorInputValue('');
        // setBlogTitleInputValue('');
        // setCategorySelected('Select a Category');
        // setImage(null);
        console.log('working')
    }
 


    const value = {
        textEditorInputValue,
        blogTitleInputValue,
        categorySelected,
        image,
        setTextEditorInputValue,
        setBlogTitleInputValue,
        setCategorySelected,
        setImage,
        handleDelete
    }

    return (
        <TextEditorInputValueContext.Provider value={value}>
            {children}
        </TextEditorInputValueContext.Provider>
    )
}