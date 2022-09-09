import React from 'react'
import { Link } from 'react-router-dom'

const Timer = () => {

    return (
        <div className="timer">
            <nav>
                <Link
                    className={window.location.pathname === "/Stopwatch" ? "active" : ""}
                    to="/Stopwatch"
                >Stopwatch</Link>
                <Link
                    className={window.location.pathname === "/Timer" ? "active" : ""}
                    to="/Timer"
                >Timer</Link>
            </nav>

            <main>
                Timer
            </main>
        </div>
    )
}

export default Timer