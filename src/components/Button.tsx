import { cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

const classes = cva(
    // "border border-white h-12 rounded-full px-6 font-medium",
    ["border", "h-12", "rounded-full", "px-6", "font-medium"],
    {
        variants: {
            variant: {
                primary: 'bg-lime-400 border-lime-400 text-neutral-950',
                secondary: "border-white text-white bg-transparent"
            },
            size: {
                sm: 'h-10'
            }
        }
    }
)

const Button = (props: { variant: 'primary' | 'secondary', size?: 'sm' } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { variant, className, size, ...otherProps } = props;

    return (
        <button className={classes({
            variant, className, size
        })}
            {...otherProps}
        />
    )
}

export default Button;