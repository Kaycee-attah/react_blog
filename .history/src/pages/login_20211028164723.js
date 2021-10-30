import React, { useEffect } from 'react';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdFacebook } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function Login() {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".auth-main-container");

        sign_up_btn.addEventListener('click', () => {
            container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener('click', () => {
            container.classList.remove("sign-up-mode");
        })
    })

    return (
        <div className="auth-main-container">
            <div className="forms-container">
                <div className="sign-in-sign-up">
                    <form className="sign-in-form">
                        <h2 className="form-title">Sign In</h2>
                        <div className="input-field">
                            <div className="icon">
                                <ImUser />
                            </div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">
                                <RiLockPasswordFill />
                            </div>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <input className="submit-btn" type="submit" value="Login"/>

                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                <MdFacebook style={{width:"100%", height:"100%"}}/>
                            </a>
                            <a href="/" className="social-icon">
                                W
                            </a>
                            <a href="/" className="social-icon">
                                I
                            </a>
                            <a href="/" className="social-icon">
                                T
                            </a>
                        </div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="form-title">Sign Up</h2>
                        <div className="input-field">
                            <div className="icon">
                                <ImUser />
                            </div>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">
                                <MdEmail />
                            </div>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="input-field">
                            <div className="icon">
                                <RiLockPasswordFill />
                            </div>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <input className="submit-btn" type="submit" value="Sign Up"/>

                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="/" className="social-icon">
                                f
                            </a>
                            <a href="/" className="social-icon">
                                W
                            </a>
                            <a href="/" className="social-icon">
                                I
                            </a>
                            <a href="/" className="social-icon">
                                T
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New Here ?</h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button id="sign-up-btn" className="btn">Sign Up</button>

                        <img src={require('../assets/svgs/undraw_authentication_fsn5.svg').default} alt="" />
                    </div>
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of Us ?</h3>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button id="sign-in-btn" className="btn">Sign In</button>

                        <img src={require('../assets/svgs/undraw_Login_re_4vu2.svg').default} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
