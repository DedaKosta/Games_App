import React from 'react'
import Input from './Input'

const podaci = [
    {
        name: 'domacin'
    },
    {
        name: 'gost'
    },
    {
        name: 'datum'
    },
    {
        name: 'vreme'
    }]

const InputField = (props) => {
    return (
        <>
            {podaci.map((podatak) => (
                <div className='podatak'>
                    <label className='podatak-labela'>{podatak.name}</label>
                    <Input key={podatak.name} type='text' name={podatak.name} onChange={props.onChange}/>
                </div>
            ))}
        </>
    )
}

export default InputField
