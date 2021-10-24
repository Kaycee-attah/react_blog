import React from 'react'

export default function login() {
    return (
        <div className="main-container">
            <div className="forms-container">
                <div className="sign-in/sign-up">
                    <form className="sign-in-form">
                        <h2 className="form-title">Sign In</h2>
                        <div className="input-field">
                            <div>icon</div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <input className="submit" type="submit" value="Login"/>

                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                facebook
                            </a>
                            <a href="#" className="social-icon">
                                WhatsApp
                            </a>
                            <a href="#" className="social-icon">
                                Instagram
                            </a>
                            <a href="#" className="social-icon">
                                Twitter
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
