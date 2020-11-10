import React from 'react';
import './button.scss'


const style = [
    'btn--primary',
    'btn--outline'
]

const sizes = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = style.includes(buttonStyle) ? buttonStyle : style[0];

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : style[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}
        >
            {children} {} </button>
    )


}