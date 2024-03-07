// React TypeScript - Wrapping HTML Elements - https://www.youtube.com/watch?v=4GchlC06ca0
import React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'> 
// Omit keyword takes an object type and removes the specified properties

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <div>
            <h3>Wrapping HTML Elements - Please check Button.tsx under html folder</h3>
            <button className={`class-with-${variant}`}{...rest}>
                {children}
            </button>
        </div>
    )
}