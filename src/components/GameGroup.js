import React from 'react'
import Game from './Game'
import '../App.css'
import { FaTimes } from 'react-icons/fa'

const GameGroup = (props) => {
    return (
        <div className='grupa-utakmice'>
            <h2>{props.sport}</h2>
            <div className='utakmice'>
                {props.utakmice.map((utakmica) => (
                    <Game utakmica={utakmica} onDelete={props.onDelete} />
                ))}
            </div>
        </div>
    )
}

export default GameGroup