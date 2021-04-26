import React from 'react'
import './Button.css'

export default (props) => {
    return (
        <button className="Button">{props.label}</button>
    )
}