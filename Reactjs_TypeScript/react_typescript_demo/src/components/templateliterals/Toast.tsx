//React TypeScript - Template Literals and Exclude - https://www.youtube.com/watch?v=jrnIh0RPeCw
/*
Position prop can be one of
    "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
    "center-bottom" |"right-center" | "right-top" | "right-bottom"

*/
type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center' >
              | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>
            <h3>Template Literals and Exclude - Please check Toast.tsx for coding</h3>
            Toast Notification Position - {position}
        </div>
    )
}


