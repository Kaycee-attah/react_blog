import React, { useContext, useState } from 'react';

const TextEditorInputValueContext = React.createContext();

export function useTextEditorInputValue() {
    return useContext(TextEditorInputValueContext);
}

export function TextEditorProvider({ children }) {
    const [textEditorInputValue, setTextEditorInputValue] = useState('');
    const [blogTitleInputValue, setBlogTitleInputValue] = useState('');
    const [categorySelected, setCategorySelected] = useState('Select a Category');
 


    const value = {
        textEditorInputValue,
        blogTitleInputValue,
        categorySelected,
        setTextEditorInputValue,
        setBlogTitleInputValue,
        setCategorySelected
    }

    return (
        <TextEditorInputValueContext.Provider value={value}>
            {children}
        </TextEditorInputValueContext.Provider>
    )
}