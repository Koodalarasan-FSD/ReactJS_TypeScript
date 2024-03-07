import React,{ useContext } from "react"
import { ThemeContext } from "./ThemeContext"

// React TypeScript - useContext Hook - https://www.youtube.com/watch?v=rbtTb9hLYS8

export const Box = () => {
    const theme=useContext(ThemeContext)
{/*return (
    <div style={{backgroundColor:theme.primary.main,color:theme.primary.text}}>Theme Context</div>
  )
*/}
  
}
