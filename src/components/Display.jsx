import React from 'react' 
import './Display.css'

export default function button(props) {
    return(
        <div className="Display">
            {props.value}
        </div>
    )
}