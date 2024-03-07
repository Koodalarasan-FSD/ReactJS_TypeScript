import { PersonProps } from "./Person.types"

// React TypeScript - Basic Props - https://www.youtube.com/watch?v=mDu54a5U3OU
// React TypeScript - Prop Types and Tips - https://www.youtube.com/watch?v=4Ml7Lp_QcSo
// Please check Person.types.tsx


export const Person=(props:PersonProps)=>{
    return(
    <div>
        <h3>Props - Please Check Person.tsx & App.tsx for coding </h3>
        {props.name.first} {props.name.last}
    </div>
    )
}