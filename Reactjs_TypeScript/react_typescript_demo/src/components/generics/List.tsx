// React TypeScript Tutorial - 19 - Generic Props

type ListProps={
    items:string[]
    onClick:(value:string)=>void
}

export const List=({items,onClick}:ListProps)=>{
    return(
        <div>
            <h3>List of Items-Generic Props- Please check List.tsx for coding</h3>
            {items.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}