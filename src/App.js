import React, { Component } from 'react';
import './App.css';
import Cyrano from './Component/Cyrano';
import Bottombar from './Component/Bottombar/Bottombar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import newspeed from './pages/newspeed';
import personal from './pages/perosnal';
import login from './pages/login';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={newspeed} />
                    <Route path="/newspeed" component={newspeed} />
                    <Route path="/personal" component={personal} />
                </Switch>

            </div>

        </Router>
    );
};

export default App;