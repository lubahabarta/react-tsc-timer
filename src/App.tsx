import React from 'react';
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

const App = () => {
    return (
        <div className="app">
            <Router>

                <nav>
                    <Link to="/Stopwatch">Stopwatch</Link>
                    <Link to="/Timer">Timer</Link>
                </nav>

                <main>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/Stopwatch" />
                        </Route>
                        <Route path="/Stopwatch">
                            <div>Stopwatch</div>
                        </Route>
                        <Route path="/Timer">
                            <div>Timer</div>
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