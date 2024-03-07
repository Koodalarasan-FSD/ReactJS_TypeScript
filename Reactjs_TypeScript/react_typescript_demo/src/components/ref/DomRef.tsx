import { useRef,useEffect } from "react";

// React TypeScript - useRef Hook - https://www.youtube.com/watch?v=hA4i1RTbZ2A

export const DomRef=()=>{
    const inputRef=useRef<HTMLInputElement>(null!)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return(
        <div>
            <h3>Below Input Tag using UseRef & useEffect, check DomRef.tsx for coding</h3>
            <input type="text" ref={inputRef}/>
        </div>
    )
}