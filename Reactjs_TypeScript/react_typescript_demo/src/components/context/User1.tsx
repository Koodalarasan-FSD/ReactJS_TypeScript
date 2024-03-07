import { useContext } from "react"
import { UserContext } from "./UserContext"

// React TypeScript - useContext Future Value - https://www.youtube.com/watch?v=9726Yq3Scjk


export const User1=()=>{
        const userContext=useContext(UserContext)

    const handleLogin=()=>{
            userContext.setUser(
                {
                    name:'Koodalarasan',
                    email:'koodalarasan@aasvatech.com'
                }
            )
        }
    const handleLogout=()=>{
            userContext.setUser(null)
        }

    return(
        <div>
            <h3>Below Login & Logout Button Processed by useContext Future Value -Please check User1.tsx, UserContext.tsx & App.tsx for coding </h3>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User_Name is {userContext.user?.name} </div>
            <div>User_Email is{userContext.user?.email} </div>    
        </div>
    )
}