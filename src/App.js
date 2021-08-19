import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import GameGroup from './components/GameGroup'
import { useState } from 'react'

function App() {

  const [utakmice, postaviUtakmice] = useState([
    {
      id: 1,
      sport: 'Fudbal',
      domacin: 'Chelsea',
      gost: 'Liverpool',
      datum: '17.07.2021',
      vreme: '16:00'
    },
    {
      id: 2,
      sport: 'Kosarka',
      domacin: 'Denver',
      gost: 'Miami',
      datum: '25.07.2021',
      vreme: '03:00'
    },
    {
      id: 3,
      sport: 'Fudbal',
      domacin: 'Tottenham',
      gost: 'Manchester United',
      datum: '19.07.2021',
      vreme: '16:00'
    },
    {
      id: 4,
      sport: 'Rukomet',
      domacin: 'PSG',
      gost: 'Barcelona',
      datum: '29.07.2021',
      vreme: '13:00'
    },
    {
      id: 5,
      sport: 'Odbojka',
      domacin: 'Srbija',
      gost: 'Italija',
      datum: '09.07.2021',
      vreme: '17:30'
    }
  ])

  const grouped = utakmice.reduce((r, u) => {
    r[u.sport] = [...r[u.sport] || [], u]
    return r
  }, {})

  const grouped2 = new Array()

  Object.entries(grouped).forEach((group) => (group.map((utakmica) => {
    if(Array.isArray(utakmica)) {
      grouped2.push(utakmica)
    }
  })))

  //Brisanje utakmice
  const deleteGame = (id) => {
    postaviUtakmice(utakmice.filter((task) => task.id !== id))
  }

  //Dodavanja utakmice
  const addGame = (game) => {
    const id = utakmice.length + 1
    
    const newGame = {id, ...game}

    postaviUtakmice([...utakmice, newGame])
  }

  return (
    <div className='cont'>
      <div className="App">
        <Header name='Fudbal'/>
      </div>

      <div className='Content'>
        <div className='form-container'>
          <Form onAdd={addGame}/>
        </div>

        <div className='sports-container'>
          {
            grouped2.map((grupa) => (
              <GameGroup sport={grupa[0].sport} utakmice={grupa} onDelete={deleteGame} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
