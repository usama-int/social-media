import React from 'react';
import './SignInPage.css';

const SignInPage = () => {

 const google = () => {
window.open("https://uol-socia-media-130e4e1229f5.herokuapp.com/auth/google", "_self");};
        
    return (
        <div className="body">
            <div className="header">
                <div className="title">UOL SOCIAL APP</div>
                <img className="logo" src="./img/University_of_Lahore_(logo).png" alt="Logo" />
            </div>
            <div className="container">
                <img src="./img/UOL-Banner.jpg" alt="Banner" width="500" height="425" />
            </div>
            <div className="container">
                <h1>WELCOME TO UOL SOCIAL MEDIA APP</h1>
                <button className="button" onClick={google}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SignInPage;