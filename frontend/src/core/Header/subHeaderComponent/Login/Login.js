import React from 'react';
import './Login.css';
import Button from '../../../Button/Button';

function Login() {
  return (
    <div className="login">

      <div className="login-grid-container">
        <div className="login-grid-segment">
          <div className="login-image">
            <img src={window.location.origin + '/images/login-left-image.jpg'} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div className="login-grid-segment">
          <div className="login-heading" >
            <div style={{ fontSize: "35px", color: "black", paddingTop: '5%', lineHeight: '43px' }}><b>Login to Your Account</b></div>
            <div style={{ fontSize: "15px", paddingTop: '2%', lineHeight: '18px' }}><b>And Begin a Beautiful Journey</b></div>

            <div className="login-Socal-Media" style={{ paddingTop: "6%", width: '100%' }}>

              <button >
                <div className="login-social-grid">
                  <div className="login-fb">
                    <img src={window.location.origin + '/images/fb.png'} style={{ width: '25px', height: '25px' }} />
                  </div>
                  <div className="login-fb" style={{ fontSize: "15px", lineHeight: '18px' }}>
                    <b>Facebook</b>
                  </div>
                </div>
              </button>
              &nbsp;
              <button>
                <div className="login-social-grid">
                  <div className="login-fb">
                    <img src={window.location.origin + '/images/google.png'} style={{ width: '25px', height: '25px' }} />
                  </div>
                  < div className="login-fb" style={{ fontSize: "15px", lineHeight: '18px' }}>
                    <b>Google</b>
                  </div>
                </div>
              </button>

            </div>

            <div style={{ fontSize: '13px', paddingTop: "6%", lineHeight: '16px' }}><b>OR</b></div>

            <div className="login-Authorization" style={{ paddingTop: '6%' }}>
              <div className="login-Authorization-placeholders">
                <div className="login-email-sidebar"></div>
                <input type="text" id="login-Authorization-input" placeholder="Email Address" style={{ fontWeight: "bold", fontSize: "16px" }}></input>
              </div>
              <div className="login-Authorization-placeholders"  >
                <input type="password" id="login-Authorization-input" placeholder="Password" style={{ fontWeight: "bold", fontSize: "16px", marginLeft: "7%" }}></input>
              </div>
            </div>

            <div className="login-Intent-ForgotPassword" style={{ fontSize: "15px", paddingTop: '6%', lineHeight: '18px' }}>
              <button><b>Forgot Password | Help?</b></button>
            </div>

            <div className="login-Intent-Authenication" style={{ paddingTop: '6%' }}>
              <Button
                width="80%"
                height="55px"
                text="Login"
                fontSize="24px"
                lineHeight="29px"
                background="#FF4208"
                color="#FFFFFF"
                alignSelf="center"
                style={{ fontSize: "24px" }}
              />
              <div style={{ fontSize: "17px", paddingTop: '6%', paddingBottom: '3%', lineHeight: '21px' }}><b>Don't Have An Account?</b></div>
              <Button
                width="80%"
                height="55px"
                text="Register"
                fontSize="24px"
                lineHeight="29px"
                background="#FF4208"
                color="#FFFFFF"
                alignSelf="center"
                style={{ fontSize: "24px" }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
