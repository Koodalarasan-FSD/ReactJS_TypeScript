import React from "react";

// React TypeScript - Polymorphic Components - https://www.youtube.com/watch?v=uZ8GZm5KEXY

type TextOwnProps<E extends React.ElementType> = {
    size?:'sm'|'md'|'lg'
    color?:'primary'|'secondary'
    children:React.ReactNode
    as?:E
}

type TextProps<E extends React.ElementType>=TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>

export const Text =<E extends React.ElementType='div'>({size,color,children,as}:TextProps<E>)=>{
    const Component=as||'div'
    return(
    <div>
        
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    
    </div>
    )
}