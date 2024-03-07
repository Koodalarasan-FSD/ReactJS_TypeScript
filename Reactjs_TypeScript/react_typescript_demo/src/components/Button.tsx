import React from "react"

//React TypeScript - Event Props - https://www.youtube.com/watch?v=xNSIHFi8o2M

type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const Button = (props:ButtonProps) => {
  return (
    <div>
        <h3>Event Props - Please Check Button.tsx & App.tsx for coding</h3>
        <button onClick={props.handleClick}>Click</button>
    </div>
    
  )
}
