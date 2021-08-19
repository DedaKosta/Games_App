import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Game = (props) => {
    return (
        <div className='utakmica'>
            <h3>{props.utakmica.domacin} - {props.utakmica.gost} <FaTimes className='delete-icon' onClick={() => props.onDelete(props.utakmica.id)} /></h3>
            <p>{props.utakmica.datum} - {props.utakmica.vreme}</p>
        </div>
    )
}

export default Game
