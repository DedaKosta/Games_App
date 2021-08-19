import React from 'react'
import '../App.css'

const Input = (props) => {
    return (
        <div className='radio-dugme'>
        {
            props.type === 'radio' 
            ? <input type={props.type} name = {props.name} onChange={() => props.onChange(props.value)}/>
            : <input type={props.type} name = {props.name} onChange={(e) => props.onChange(e.target, e.target.value)}/>
        }
            <label>{props.value}</label>
        </div>
    )
}

export default Input