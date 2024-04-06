import React from 'react'

function Button(props) {
  return (

    /*
         cl = "blue / purple"
         px = inline padding
         py = block padding
         msg = "string" {<><h1>...</h1><p>...</p></>}
    */
    <button 
        className={`cta-btn ${props.cl}--btn`}
        style={{ padding: `${props.py} ${props.px}` }}
    >
        {props.msg}
    </button>
  )
}

export default Button
