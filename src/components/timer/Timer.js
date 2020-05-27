import React, {useState, useEffect} from 'react';
import '../../styles/Timer.scss';

const Timer = () =>{
    var [time, setTime] = useState(0);
    var [timeRunning, setTimeRunning] = useState(false);
    var [isStopped, setIsStopped] = useState(false);
    var [interval, setInter] = useState();

    useEffect(() =>{
        //interval = setInterval(timer, 1000);
    });

    const timer = () =>{
        setTime(time => time + 1);
    }

    const startTimer = () =>{
        if(timeRunning === false){
            if(isStopped)
                setTime(0);
                
            setInter(setInterval(()=>{timer()}, 10));
            setTimeRunning(timeRunning => true);
            setIsStopped(false);
        }else{
            clearInterval(interval);
            setTimeRunning(timeRunning => false);
        }
    }
    
    const stopTimer = () =>{
        if(isStopped || !timeRunning){
            setTime(time => 0);
        }else{
            clearInterval(interval);
            setTimeRunning(timeRunning => false);
            setIsStopped(true);
        }
    }
    
    const timeDisplay = (time) =>{
        var t = time;
        const hours = Math.floor(t / 360000);
        t -= hours * 360000;
        const minuts = Math.floor(t/6000);
        t -= minuts * 6000;
        const seconds = Math.floor(t/100);
        t -= seconds * 100;
        const milliseconds = t;
    
        return(
            <div>{
            (hours < 10 ? (hours === 0 ? "" : "0" + hours + ":") : hours + ":")  +
            (minuts < 10 ? (minuts === 0 ? "00" : "0" + minuts ) : minuts) + ":" +
            (seconds < 10 ? (seconds === 0 ? "00" : "0" + seconds ) : seconds) }
            <span>{":" + (milliseconds < 10 ? (milliseconds === 0 ? "00" : "0" + milliseconds ) : milliseconds)}</span></div>
        );
    }
    
    return(
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <p className="time">{timeDisplay(time)}</p>
            <button onClick={startTimer}>{timeRunning ? "Pause" : "Play"}</button>
            <button onClick={stopTimer}>{isStopped ? "Reset" : timeRunning ? "Stop" : "Reset"}</button>
        </div>
    );
}

export default Timer;