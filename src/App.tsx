import React from 'react';
import './App.css';
// react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
// components
import NotFound from './NotFound';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

const App = () => {

    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Stopwatch" />
                    </Route>
                    <Route path="/Stopwatch">
                        <Stopwatch />
                    </Route>
                    <Route path="/Timer">
                        <Timer />
                    </Route>
                    <Route path="/*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;