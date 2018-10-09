import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import newspeed from './pages/newspeed';
import personal from './pages/perosnal';
import login from './pages/login';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={login} />
                    <Route path="/newspeed" component={newspeed} />
                    <Route path="/personal" component={personal} />
                </Switch>

            </div>

        </Router>
    );
};

export default App;