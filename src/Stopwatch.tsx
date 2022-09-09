import React from 'react'
import { Link } from 'react-router-dom'

const Stopwatch = () => {

    return (
        <div className="stopwatch">
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
                Stopwatch
            </main>
        </div>
    )
}

export default Stopwatch