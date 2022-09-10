import React, { useState, useEffect } from 'react'
import './Stopwatch.css'

const Stopwatch = () => {

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [millisec, setMillisec] = useState<number>(0);

    const [clockIsRunning, setClockIsRunning] = useState<boolean>(false);

    const handleStartClick = () => {
        setClockIsRunning(prev => !prev);
    }

    const handleStopClick = () => {
        setClockIsRunning(prev => !prev);
    }

    const startClock = () => {
        setMillisec(prev => prev + 1);
    }

    useEffect(() => {
        if (clockIsRunning) {
            console.log("clock start");
        } else {
            console.log("clock stopps");
        }
    }, [clockIsRunning]);

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
                {!clockIsRunning ? (
                    <button className='button-start' onClick={() => { handleStartClick() }}>Start</button>
                ) : (
                    <button className='button-stop' onClick={() => { handleStopClick() }}>Stop</button>
                )}
                <button className='button-split'>Split</button>
                <button className='button-reset'>Reset</button>
            </section>
        </div>
    )
}

export default Stopwatch