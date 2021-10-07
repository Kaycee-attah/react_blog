import React, { useContext } from 'react'
import { usersSelectedModeContext } from '../contexts/usersSelectedModeContext'

export default function Home() {
    const {darkMode, setDarkMode} = useContext(usersSelectedModeContext);
    return (
        <div>
            home {darkMode}
            <button onClick={() => setDarkMode("true")}>change</button>
        </div>
    )
}
