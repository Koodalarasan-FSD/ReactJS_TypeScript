import { useState } from "react";

// React TypeScript - useState Future Value - https://www.youtube.com/watch?v=LNpWuRUIR5A
// React TypeScript - useState Type Assertion - https://www.youtube.com/watch?v=U3UizPM4aSk


type AuthUser={
    name:string
    email:string
}

export const User=()=>{
    // Inorder to set datas in handleLogin() we're using AuthUser|null in it.
    const [user,setUser]=useState<AuthUser|null>(null)
    
    //If you're not use null,write as below statement and remove ? from below div's
    //const [user,setUser]=useState<AuthUser>({} as AuthUser)
    
    const handleLogin=()=>{
        setUser({
            name:'Koodalarasan',
            email:'koodalarasan@aasvtech.com'
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return(
        <div>
            <h3>Below Login & Logout Button Processed by UseState Hook with Type Assertion - Please check User.tsx for coding </h3>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user?.name} </div>
            <div>User_Email is {user?.email} </div>
        
        </div>
    )
}