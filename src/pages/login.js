import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './login.css';

// or
//import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
}

const login = () =>
{
    return (
        <div className="login">
            <h1 className="title">CYRANO</h1>
            <GoogleLogin
                clientId="813143843555-sofm6u14svb2ulfpaun28qubn44tr4ge.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
            //document.getElementById('googleButton');
    );
}

export default login;