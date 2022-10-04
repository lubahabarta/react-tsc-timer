import React from 'react';
import './App.css';
// react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
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
                <div className="wrapper">
                    <nav>
                        <NavLink to="/Stopwatch">Stopwatch</NavLink>
                        <NavLink to="/Timer">Timer</NavLink>
                    </nav>

                    <main>
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
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;