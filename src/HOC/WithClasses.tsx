import React from "react";

interface withClassesProps {
    classes: string;
}

export function WithClasses<T>(Component: React.ComponentType<T & withClassesProps>) {
    return function Wrapper(props: T & withClassesProps) {
        return (
            <div className={props.classes}>
                <Component {...props} />
            </div>
        )
    }
}