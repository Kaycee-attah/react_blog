import React from 'react'

export default function Sidebar() {
    return (
        <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navigation_links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                    <span className="settings-icon" onClick={handleSettings}>
                        <MdSettings />
                    </span>
                    <div className={`settings-dropDown-Menu-Card-${settingsMenu}`}>
                        <div className="settings-dropDown-Menu">
                            <div className="users-avatar">
                                <Avatar icon={<UserOutlined />} size={38}/>
                                <span className="users-avatar-name">Attah Kelechi</span>    
                            </div>  
                            <div className="toggle-mode-wrapper">
                                <div className="toggle-mode-container">
                                    <MdLightMode />
                                    <label>
                                        <input checked={darkMode} type="checkbox"/>
                                        <span onClick={() => setDarkMode(prevMode => !prevMode)} className="check"></span>
                                    </label>
                                    <MdNightlight />    
                                </div>    
                            </div>  
                        </div>
                    </div>
                </ul>
            </div>
    )
}
