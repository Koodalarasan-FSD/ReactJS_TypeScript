import React from 'react'
import { Greet } from '../Greet'

// React TypeScript - Extracting a Components Prop Types - https://www.youtube.com/watch?v=AHadSDk7i6s

//Extracting Components Prop - In below extracting Greet Component Props here
export const CustomComponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        <h3>Extracting a Components Prop Types - Check CustomComponent.tsx for coding</h3>
        {props.name}
    </div>
  )
}
