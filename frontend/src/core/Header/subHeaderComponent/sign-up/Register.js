import React from 'react';


import './Register.css'

function Register() {
    return (
        <div className="Register">
            <div className="Register-grid-container">
                <div className="Register-grid-item">
                    <div className="Register-form">
                        <div className="white-background">
                            <img src={window.location.origin + '/white-background/white-background.jpg'} />
                        </div>
                        <div className="signup-form">
                            <div className="cross-option">
                                x
                            </div>

                            <div className="register-text">
                                <p ><b>Register With Us</b></p>
                            </div>
                            <div className="journey-text">
                                <p >And Begin a beautiful jouney</p>
                            </div>
                            <div className="Social-media">
                                <p>
                                    <button>
                                        <div className="social-media-grid-facebook">
                                            <div class="facebook">
                                                <img src={window.location.origin + '/icons-image/facebook 1.png'} />
                                            </div>
                                            <div class="facebook">
                                                FACEBOOK
                                    </div>
                                        </div>
                                    </button>
                                    <button>
                                        <div className="social-media-grid-google">
                                            <div className="google">
                                                <img src={window.location.origin + '/icons-image/google 1 (1).png'} />
                                            </div>
                                            <div className="google">
                                                Google
                                    </div>
                                        </div></button>
                                </p>
                            </div>
                            <div className="or-text">
                                <p> OR</p>
                            </div>
                            <div className="Name-input">
                                <p>
                                    <input type="text" placeholder="First Name*" style={{ borderLeft: "4px solid  #FF4208 " }} ></input>
                                    <input type="text" placeholder="Last Name"></input>
                                </p>
                            </div>
                            <div className="other-details-input">
                                <p><input type="text" placeholder="Email Address*"></input></p>
                                <p><input type="text" placeholder="Phone Number"></input></p>
                                <p><input type="password" placeholder="Password"></input></p>
                            </div>
                            <div className="gender">
                                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>I am <button>Male</button> <button>Female</button></p>
                            </div>
                            <div className="emails">
                                <p>Receive Updates in Email</p>
                            </div>
                            <div className="toggle">
                                <span className="toggle-label"></span>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label><br />


                            </div>
                            <br />
                            <div className="sign-up">
                                <p><button style={{ marginTop: "-15%" }}>SIGN UP</button></p>
                            </div>

                            <div className="login-text">
                                <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>Have an Account ?</p>
                                <p style={{ color: " #FF4208" }}>LOGIN</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Register-grid-item">

                    <div className="image">
                        <img src={window.location.origin + '/login-image/image1.png'} />

                    </div>

                </div>
            </div >
        </div >
    );
}

export default Register;