import { Login } from "./Login";
import { ProfileProps } from "./Profile";

// React TypeScript - Component Prop - https://www.youtube.com/watch?v=qvdnTfyv7y8

type PrivateProps ={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn,component:Component}:PrivateProps) => {
  if (isLoggedIn)
  {
    return <Component name="Koodalarasan"/>
  }
  else
  {
    return <Login/>
  }
}
