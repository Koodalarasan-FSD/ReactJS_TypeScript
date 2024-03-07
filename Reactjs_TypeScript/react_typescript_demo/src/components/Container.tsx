import React from 'react'

// React TypeScript - Style Props - https://www.youtube.com/watch?v=FNfHtujZE4k
        
// use React.CSSProperties whenever using css.
type ContainerProps={
    styles:React.CSSProperties
}

export const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>
        <h3>Style Props - Please Check Container.tsx & App.tsx for coding</h3>
        Text Content goes here
    </div>
  )
}
