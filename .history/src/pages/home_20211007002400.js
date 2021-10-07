import React, { useContext } from 'react'
import { usersSelectedModeContext } from '../contexts/usersSelectedModeContext'

export default function Home() {
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    console.log(darkMode)
    return (
        <div>
            home {darkMode}
            <button onClick={() => setDarkMode(!darkMode)}>change</button>
        </div>
    )
}
