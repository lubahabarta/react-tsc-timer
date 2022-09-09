import React, { useState } from 'react';
import './App.css';
// react-router-dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
// components
import NotFound from './NotFound';
import Stopwatch from './Stopwatch';
import Timer from './Timer';

const App = () => {

    const [timerActive, setTimerActive] = useState<boolean>(false);

    return (
        <div className="app">
            <Router>

                <nav>
                    <Link
                        className={!timerActive ? "active" : ""}
                        to="/Stopwatch"
                        onClick={() => setTimerActive(false)}
                    >Stopwatch</Link>
                    <Link
                        className={timerActive ? "active" : ""}
                        to="/Timer"
                        onClick={() => setTimerActive(true)}
                    >Timer</Link>
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

            </Router>
        </div>
    );
}

export default App;