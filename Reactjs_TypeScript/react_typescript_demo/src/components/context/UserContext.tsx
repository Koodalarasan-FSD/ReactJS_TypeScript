import { createContext, useState } from "react"

// React TypeScript - useContext Future Value - https://www.youtube.com/watch?v=9726Yq3Scjk

export type AuthUser={
    name:string
    email:string
}

type UserContextType={
    user:AuthUser|null
    setUser:React.Dispatch<React.SetStateAction<AuthUser|null>>
}

type UserContextProviderProps={
    children:React.ReactNode
}
export const UserContext=createContext({} as UserContextType)

export const UserContextProvider=({children}:UserContextProviderProps)=>{
 const [user,setUser]=useState<AuthUser|null>(null)
 return <UserContext.Provider value={{user,setUser}}>
    {children}
 </UserContext.Provider>
}