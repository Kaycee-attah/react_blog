import React, { useContext } from 'react'
import { usersSelectedModeContext } from '../contexts/usersSelectedModeContext'

export default function home() {
    const msg = useContext(usersSelectedModeContext);
    return (
        <div>
            home {msg}
        </div>
    )
}
