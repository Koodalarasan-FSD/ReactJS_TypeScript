import { Name } from "./Person.types"

// React TypeScript - Basic Props - https://www.youtube.com/watch?v=mDu54a5U3OU
// React TypeScript - Prop Types and Tips - https://www.youtube.com/watch?v=4Ml7Lp_QcSo

// Please check Person.types.tsx
type PersonListProps={
    names:Name[] //Due to array of elements which is passed we written array symbol([]) in here
}
export const PersonList=(props:PersonListProps)=>{
    return(
        <div>
            <h3>Props - Please Check PersonList.tsx & App.tsx for coding </h3>
            {props.names.map((name)=>{
                return(
                    <h4 key={name.first}>
                        {name.first} {name.last}
                    </h4>
                )
            })}
        </div>
    )
}