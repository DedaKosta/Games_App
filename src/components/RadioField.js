import React from 'react'
import Input from './Input'

const Sports = [
    {
        name: 'Fudbal'
    },
    {
        name: 'Kosarka'
    },
    {
        name: 'Rukomet'
    },
    {
        name: 'Odbojka'
    }]

const RadioField = (props) => {
    return (
        <>
            {Sports.map((sport) => (
                <Input type='radio' name='naziv' value={sport.name} onChange={props.onChange}/>
            ))}
        </>
    )
}

export default RadioField
