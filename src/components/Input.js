import React from 'react'

const Input = props => {
    const { id, name, type, className } = props
    return <input type={type} id={id} name={name} className={className} {...props}></input>
};

export default Input;