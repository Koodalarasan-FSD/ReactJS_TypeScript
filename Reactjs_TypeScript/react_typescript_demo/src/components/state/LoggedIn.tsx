import { useState } from "react";

export const LoggedIn =()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)

    const handleLogin=()=>{
        setIsLoggedIn(true)
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
    }
    return(
        <div>
            <h3>Below Login & Logout Button Processed by UseState Hook - Please check LoggedIn.tsx for coding </h3>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn?'Logged-In':"logged-out"}</div>
        </div>
    )
}