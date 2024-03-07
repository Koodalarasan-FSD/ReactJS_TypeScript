// React TypeScript - Advanced Props - https://www.youtube.com/watch?v=zLyeWSfTMa8

type OscarProps={
    children:React.ReactNode
}

{/*Props - Please Check Heading.tsx, Oscar.tsx & App.tsx for coding */}
export const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}
