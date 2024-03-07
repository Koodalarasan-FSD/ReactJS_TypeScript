import { Component } from "react";

// React TypeScript - Class Component - https://www.youtube.com/watch?v=JOhIMtMxjpU

type CounterProps={
    message:string
}
type CounterState={
    count:number
}

/* The count value is 5 */
export class Counter1 extends Component<CounterProps,CounterState>{
    state={
        count:0,
    }   
    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render(){
        return(
            <div>
                <h3>Below Increment Operation processed by class component, check Counter1.tsx for coding</h3>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count} 
            </div>
        )
    }
}