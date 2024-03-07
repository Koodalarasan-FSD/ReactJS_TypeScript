import React from "react"

//React TypeScript - Event Props - https://www.youtube.com/watch?v=xNSIHFi8o2M

type InputProps={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input=({value,handleChange}:InputProps)=>{
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return(
    <div>
        <h3>Event Props - Please Check Input.tsx & App.tsx for coding</h3>
        <input type='text' value={value} onChange={handleChange}/>
    </div>
    )
}