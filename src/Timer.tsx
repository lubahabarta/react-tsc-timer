import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Timer = () => {

    const [path, setPath] = useState<string>(window.location.pathname);

    return (
        <div className="timer">
            <nav>
                <Link
                    className={path === "/Stopwatch" ? "active" : ""}
                    to="/Stopwatch"
                >Stopwatch</Link>
                <Link
                    className={path === "/Timer" ? "active" : ""}
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