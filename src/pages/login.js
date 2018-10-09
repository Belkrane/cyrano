import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './login.css';
import { Redirect } from 'react-router-dom';


class login extends Component{
    state = {
        isLogin: false
    }

    responseGoogle = (response) => {
        alert(response.tokenId);
        this.setState({isLogin: true})
    }

    render(){
        return(
            <div className="login">
                <h1 className="title">CYRANO</h1>
                <GoogleLogin
                    clientId="813143843555-sofm6u14svb2ulfpaun28qubn44tr4ge.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle = this.responseGoogle.bind(this)}
                    onFailure={this.responseGoogle}
                />

                {this.state.isLogin ? <Redirect to="/newspeed"/> : ""}
            </div>

        );
    }
}

export default login;