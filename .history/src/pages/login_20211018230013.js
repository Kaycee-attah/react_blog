import React from 'react'

export default function login() {
    return (
        <div className="main-container">
            <div className="forms-container">
                <div className="sign-in-sign-up">
                    <form className="sign-in-form">
                        <h2 className="form-title">Sign In</h2>
                        <div className="input-field">
                            <div className="icon">icon</div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">icon</div>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <input className="submit-btn" type="submit" value="Login"/>

                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                f
                            </a>
                            <a href="#" className="social-icon">
                                W
                            </a>
                            <a href="#" className="social-icon">
                                I
                            </a>
                            <a href="#" className="social-icon">
                                T
                            </a>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="form-title">Sign Up</h2>
                        <div className="input-field">
                            <div className="icon">icon</div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">icon</div>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">icon</div>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <input className="submit-btn" type="submit" value="Sign Up"/>

                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                f
                            </a>
                            <a href="#" className="social-icon">
                                W
                            </a>
                            <a href="#" className="social-icon">
                                I
                            </a>
                            <a href="#" className="social-icon">
                                T
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel-left">
                    <div className="content">
                        <h3>New Here ?</h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button className="submit-btn signup-btn">Sign Up</button>

                        <img src={require('../assets/svgs/undraw_authentication_fsn5.svg').default} alt="" />
                    </div>
                </div>

                <div className="panel-right">
                    <div className="content">
                        <h3>One of Us ?</h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button className="signin-btn">Sign In</button>

                        <img src={require('../assets/svgs/undraw_Login_re_4vu2.svg').default} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
