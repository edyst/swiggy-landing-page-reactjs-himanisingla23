import React from 'react'
import './Button.css'

function Button(props) {
    return (
       <button className={props.cls}>
            {props.btn}
       </button>
    )
}

export default Button
