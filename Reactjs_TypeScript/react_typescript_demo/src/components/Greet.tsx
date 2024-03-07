// Reactjs - Typing Props - https://www.youtube.com/watch?v=KpA6oEaCHtk
// React TypeScript - Basic Props - https://www.youtube.com/watch?v=mDu54a5U3OU

 // Below Declaring data type of props as objects using "type" keyword
type GreetProps={
    name:string
    messageCount?:number // ? means optional maybe if it's messageCount not found, error not get raised
    isLoggedIn:boolean
}
export const Greet =(props:GreetProps)=>{
    
    //In below specifing messageCount as 0 in here instead of passed from App.tsx
    const {messageCount=0}=props
    
    return(
        <div>
            <h3>Props - Please Check Greet.tsx & App.tsx for coding</h3>
            <h4>
                {props.isLoggedIn
                ?`Welcome ${props.name}! You have ${messageCount} unread messages`
                :'Welcome Guest'
                }
            </h4>
        </div>
    )
}