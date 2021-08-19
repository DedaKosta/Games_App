import React from 'react'
import RadioField from './RadioField'
import InputField from './InputField'
import { useState } from 'react'
import '../App.css'

const Form = ({ onAdd }) => {

  const [sport, setSport] = useState('')
  const [domacin, setDomacin] = useState('')
  const [gost, setGost] = useState('')
  const [datum, setDatum] = useState('')
  const [vreme, setVreme] = useState('')

  const postaviSport = (value) => {
    setSport(value)
  }

  const postaviValue = (key, value) => {
    switch(key.name) {
      case 'domacin':
        setDomacin(value)
        break;
      case 'gost':
        setGost(value)
        break;
        case 'datum':
          setDatum(value)
          break;
        case 'vreme':
          setVreme(value)
          break;
        default:
          break;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(sport === '' || domacin === '' || gost === '' || datum === '' || vreme === '') {
      alert('Niste uneli sve podatke')
      return
    }

    onAdd({ sport, domacin, gost, datum, vreme })
  }

    return (
        <form className='forma' onSubmit={onSubmit}>
          <h2 className='form-container-heading'>Dodaj utakmmicu:</h2>
          <hr></hr>
          <div className="sportovi">
            <RadioField sport={sport} onChange={postaviSport}/>
          </div>
          <hr></hr>
          <div className='utakmica-podaci'>
              <InputField onChange={postaviValue}/>
          </div>
          <hr></hr>
          <input className='btn' type="submit" value='Save Game' />
        </form>
    )
}
export default Form