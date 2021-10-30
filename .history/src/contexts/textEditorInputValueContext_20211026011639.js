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
    const [dialogueBoxActive, setDialogueBoxActive] = useState(false);
 


    const value = {
        textEditorInputValue,
        blogTitleInputValue,
        categorySelected,
        image,
        dialogueBoxActive,
        setTextEditorInputValue,
        setBlogTitleInputValue,
        setCategorySelected,
        setImage,
        setDialogueBoxActive
    }

    return (
        <TextEditorInputValueContext.Provider value={value}>
            {children}
        </TextEditorInputValueContext.Provider>
    )
}