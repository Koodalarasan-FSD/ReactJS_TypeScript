// React TypeScript - Wrapping HTML Elements - https://www.youtube.com/watch?v=4GchlC06ca0

import React from "react"
 
type InputProps = React.ComponentProps<'input'>

export const CustomInput=(props:InputProps)=>{
    return <input {...props}/>
}