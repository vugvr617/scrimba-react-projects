import './App.css';
import Start from './Components/Start/Start';
import React, { useState, useEffect } from 'react'
import Questions from './Components/Questions/Questions';

function App() {
  const [isStarted, startGame] = useState(false);
  const [quizData, setQuizData] = useState({});
  const [questionsArray, setArray] = useState([])
  const [isAnswersShown, showAnswers] = useState(false);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
      .then((response) => response.json())
      .then((response) => setQuizData(response))
  }, [])
  console.log(quizData.results);

  const blobStyle = {
    width: isStarted ? '13%' : '17%',
    minWidth: isStarted ? '100px' : '150px',
    margin: '0'
  }

  const startFunction = () => {
    startGame(true);
    setArray(quizData.results.map(question => {
      return <Questions correctAnswer={(question.correct_answer)}
        incorrectAnswers={(question.incorrect_answers)}
        quizQuestion={decodeURIComponent(question.question)}
        isStarted={true}
        isAnswersShown={isAnswersShown}>
      </Questions>
    }))
  }

  const mainDivDisplay = {
    display: isStarted? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const checkAnswers = () => {
    showAnswers(prevState => true);
    console.log(isAnswersShown)
  }

  return (
    <main>
      <img style={blobStyle} className="blob-1" alt="Blob1" src="/blob-img1.svg"></img>
      <div style={mainDivDisplay}>
        <div>
        {questionsArray}
        </div>
        <div className='button-div'><button onClick={checkAnswers}>Check Answers</button></div>
      </div>
      <Start handleStartClick={startFunction} isStarted={isStarted}>
      </Start>
      <img style={blobStyle} className="blob-2" alt="Blob2" src="/blob-img2.svg"></img>
    </main>
  );
}

export default App;
