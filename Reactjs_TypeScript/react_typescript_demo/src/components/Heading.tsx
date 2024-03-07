// React TypeScript - Advanced Props - https://www.youtube.com/watch?v=zLyeWSfTMa8

type HeadingProps={
    children:string
}
export const Heading = (props:HeadingProps) => {
  return (
    <div>
        <h3>Props - Please Check Heading.tsx, Oscar.tsx & App.tsx for coding</h3>
        <h4>{props.children}</h4>
    </div>
  )
}
