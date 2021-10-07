import React, { useContext } from 'react'
import { usersSelectedModeContext } from '../contexts/usersSelectedModeContext'

export default function Home() {
    const msg = useContext(usersSelectedModeContext);
    return (
        <div>
            home {msg}
        </div>
    )
}
