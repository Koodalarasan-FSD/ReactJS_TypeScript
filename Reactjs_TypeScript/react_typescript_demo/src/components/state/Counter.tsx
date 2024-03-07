import { useReducer } from "react";

// React TypeScript - useReducer Hook - https://www.youtube.com/watch?v=lSh9RyYcnPA
// React TypeScript - useReducer Strict Action Types - https://www.youtube.com/watch?v=bcmes6hUO3U

type CounterState={
    count:number
}
type UpdateAction={
    type:'increment'|'decrement'
    payload:number
}
type ResetAction={
    type:'reset'
}
type CounterAction=UpdateAction|ResetAction


const initialState={count:0}

function reducer(state:CounterState,action:CounterAction)
{
    switch (action.type)
    {
        case 'increment':
            return{count:state.count+action.payload}
        case 'decrement':
            return{count:state.count-action.payload}
        default:
            return state
    }
}

export const Counter=()=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h3>Below Count Operation Processed by UseReducer Hook - Please check Counter.tsx for coding </h3>
            Count:{state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment 10</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement 10</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        
        </div>
    )
}