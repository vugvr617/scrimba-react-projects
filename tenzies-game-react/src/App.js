import './App.css';
import Dies from './Components/Dies/Dies';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';

function App() {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  const generateNewArray = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  const [diceArray, setDiceArray] = useState(generateNewArray);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = diceArray.every(dice => dice.isHeld);
    const firstValue = diceArray[0].value
    const allSameValue = diceArray.every(dice => dice.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("YOU WON");
    }
  }, [diceArray])

  function showID(event) {
    setDiceArray(oldDice => oldDice.map(die => {
      return die.id === event.target.id ?
        { ...die, isHeld: die.isHeld ? false : true } :
        die
    }))
  }


  const dieDivs = diceArray.map((die) => {
    return <Dies
      handleClick={showID}
      value={die.value}
      isHeld={die.isHeld}
      id={die.id}></Dies>
  })

  function handleRoll() {
    if (tenzies) {
      setDiceArray(prevArray => prevArray.map(die => {
        return generateNewDie();
      }))
      setTenzies(false)
    } else {
      setDiceArray(prevArray => prevArray.map(die => {
        return die.isHeld ? die : generateNewDie();
      }))
    }
  }

  return (
    <main>
      {tenzies && <Confetti></Confetti>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='container-div'>
        <div className="die-container">
          {dieDivs}
        </div>
      </div>
      <button onClick={handleRoll} className='roll-button'>{tenzies ? "New game" : "Roll"}</button>
    </main>
  );
}

export default App;
