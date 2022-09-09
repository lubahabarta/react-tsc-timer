import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Stopwatch = () => {

    const [path, setPath] = useState<string>(window.location.pathname);

    return (
        <div className="stopwatch">
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
                Stopwatch
            </main>
        </div>
    )
}

export default Stopwatch