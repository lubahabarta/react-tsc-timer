import React, { useState } from 'react'
import './Stopwatch.css'

const Stopwatch = () => {

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [millisec, setMillisec] = useState<number>(0);

    return (
        <div className="stopwatch">

            <p className='clock'>
                <span className='hours'>
                    {hours < 10 ? `0${hours}` : hours}
                </span>:
                <span className="minutes">
                    {minutes < 10 ? `0${minutes}` : minutes}
                </span>:
                <span className='seconds'>
                    {seconds < 10 ? `0${seconds}` : seconds}
                </span>
                <span className="millisec">
                    .{millisec < 10 ? `0${millisec}` : millisec}
                </span>
            </p>

            <section className='buttons'>
                {true ? (
                    <button className='button-start'>Start</button>
                ) : (
                    <button className='button-stop'>Stop</button>
                )}
                <button className='button-split'>Split</button>
                <button className='button-reset'>Reset</button>
            </section>
        </div>
    )
}

export default Stopwatch