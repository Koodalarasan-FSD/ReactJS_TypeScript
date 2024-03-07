// React TypeScript - Component Prop - https://www.youtube.com/watch?v=qvdnTfyv7y8

export type ProfileProps={
    name:string
}
export const Profile = ({name}:ProfileProps) => {
  return (
    <div>
        <h3>Component Prop- check Private.tsx, Profile.tsx, Login.tsx & App.tsx for coding</h3>
        Private Profile Component, Name is {name} 
    </div>
  )
}
