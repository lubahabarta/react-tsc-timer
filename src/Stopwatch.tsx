import React from 'react'
import './Stopwatch.css'

const Stopwatch = () => {

    return (
        <div className="stopwatch">
            <p className='clock'>
                <span className='hours'>00</span>:
                <span className="minutes">00</span>:
                <span className='seconds'>00</span>
                <span className="millisec">.00</span>
            </p>
        </div>
    )
}

export default Stopwatch