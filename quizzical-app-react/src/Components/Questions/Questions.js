import './Questions.css';
import React, { useEffect, useState } from 'react';
import Answers from '../Answers/Answers';

export default function Questions(props) {
    const questionsStyle = {
        display: props.isStarted ? 'block' : 'none'
    }

    useEffect(() =>     console.log(props.isAnswersShown)
,  [props.isAnswersShown]  )

    let answersArray = [...props.incorrectAnswers, props.correctAnswer];
    let newAnswersArray = [];
    let newDataArray = [];
    while(newDataArray.length < 4){
        let randomNumber = Math.floor(Math.random() * 4);
        if(newDataArray.includes(randomNumber) === false){
            newDataArray.push(randomNumber);
        }
    }

    for(let i = 0; i < newDataArray.length; i++){
        newAnswersArray[newDataArray[i]] = answersArray[i];   
    }
    
    return (
        <div style={questionsStyle} div="main-content">
            <div className='questions-div'>
                <div className='question'>
                    <h2>{props.quizQuestion}</h2>
                    <Answers
                        correctAnswer = {props.correctAnswer}
                        answersArray = {newAnswersArray}
                        isAnswersShown = {props.isAnswersShown}
                        >
                    </Answers>
                    <hr></hr>
                </div>
            </div>
        </div>);
}