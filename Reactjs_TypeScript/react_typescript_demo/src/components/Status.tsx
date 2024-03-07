// React TypeScript - Advanced Props - https://www.youtube.com/watch?v=zLyeWSfTMa8

//Below setting status variable must be only three such as loading,success,error
type StatusProps={
    status:'loading'|'success'|'error'
}

export const Status=(props:StatusProps)=>{
    let message
    if(props.status==='loading')
    {
        message="Loading..."
    }
    else if(props.status==='success')
    {
        message='Data Fetched Successfully'
    }
    else if(props.status='error')
    {
        message='Error fetching data'
    }
    return(
        <div>
            <h3>Props - Please Check Status.tsx & App.tsx for coding </h3>
            <h4>Status-{message}</h4>
        </div>
    )
}