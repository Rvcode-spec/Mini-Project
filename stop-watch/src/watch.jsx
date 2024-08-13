import React from 'react'

export default function watch() {
  return (
    <div className='main-box'>
        <h1>Stop Watch</h1>
            <div className='watch-main'>
                    <div className='watch-time'>

                      <p>00:00:00</p>

                    </div>
                </div>
            
            <div className='watch-button'>
                    <button id='button'>Start testing</button>
                    <button id='button'>Stop</button>
                    <button id='button'>Reset</button>
            </div>

      
    </div>
  )
}
