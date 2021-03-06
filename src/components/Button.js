import React from 'react';

const Button = props => {
    const { id, disabled, type } = props
    return <>
        <button id={id} type={type} disabled={disabled} {...props}>{props.children}</button>
    </>
};


export default Button;