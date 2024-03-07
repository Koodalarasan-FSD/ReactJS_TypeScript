import { useState,useRef,useEffect } from "react";

// React TypeScript - useRef Hook - https://www.youtube.com/watch?v=hA4i1RTbZ2A

export const MutableRef=()=>{
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef<number|null>(null)

    const stopTimer=()=>{
        if(intervalRef.current)
            window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return()=>{
            stopTimer()
        }
    },[])
    
    return(
        <div>
            <h3>Below Hook Timer processed by useState,useRef,useEffect,then check MutableRef.tsx for coding</h3>
            HookTimer - {timer} 
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}