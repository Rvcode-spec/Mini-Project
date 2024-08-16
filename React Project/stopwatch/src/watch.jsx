
import React, {useState, useEffect} from  'react'

export default function Watch() {
 
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0); // time in seconds

  useEffect(() => {
    let interval = 0;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  
  const startWatch = () => setIsActive(true);
  const stopWatch = () => setIsActive(false);
  const resetWatch = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className='main-box'>
    <h1>Stop Watch</h1>
    <div className='watch-main'>
              <div className='watch-time'>
                 <p>{formatTime(time)}</p>
      </div>
     </div>
        <div className='watch-button'>
        <button id='button' onClick={startWatch}>Start</button>
        <button id='button' onClick={stopWatch}>Stop</button>
         <button id='button' onClick={resetWatch}>Reset</button>
     </div>
  </div>
  );
}

  
      

