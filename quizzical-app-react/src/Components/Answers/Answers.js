import './Answers.css';
import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid'

export default function Answers(props) {
    const [dataArray, setAnswer] = useState("");
    const [isAnswersShown, checkAnswer] = useState(props.isAnswersShown);
    const inputRef = useRef();

    let idArray = []
    for (let i = 0; i < 4; i++) {
        idArray[i] = [decodeURIComponent(props.answersArray[i])]
    }
    idArray[4] = [nanoid()]

    // useEffect(() => {

    // }, [isAnswersShown])
    // const answerStyle = {
    //     backgroundColor: props.correctAnswer === dataArray ? '#000000' : '#F5F7FB'
    // }

    function findCheckedAnswer() {
        for (let i = 0; i < 4; i++) {
            if (inputRef.current.children[i].children[0].checked == true) {
                return inputRef.current.children[i].children[0].value;
            };
        }
    }

    useEffect(() => console.log(props.isAnswersShown)
    , )
    function handleAnswerChange(event) {
        setAnswer((prevState) => {
            return event.target.value;
        })
        // if((decodeURIComponent(props.correctAnswer)) == dataArray){
        //     console.log('test');
        // }
    }

    const labelStyle = {
        backgroundColor: (props.isAnswersShown === true && findCheckedAnswer() == props.correctAnswer) ? '#F8BCBC' : ''
    }

    // const labelFunction = (event) => {
    //     console.log(this.target.innerText);
    // }

    return (
        <div ref={inputRef} className='answers-div'>
            <div className='answer'>
                <input type="radio"
                    id={idArray[0]}
                    value={idArray[0]}
                    onChange={handleAnswerChange}
                    name={idArray[4]}
                    checked={dataArray == idArray[0] ? true : false}
                ></input>
                <label style={labelStyle} htmlFor={idArray[0]}>{idArray[0]}</label>
            </div>
            <div className='answer'>
                <input type="radio"
                    id={idArray[1]}
                    value={idArray[1]}
                    onChange={handleAnswerChange}
                    name={idArray[4]}
                    checked={dataArray == idArray[1] ? true : false}
                ></input>
                <label style={labelStyle} htmlFor={idArray[1]}>{idArray[1]}</label>
            </div>
            <div className='answer'>
                <input type="radio"
                    id={idArray[2]}
                    value={idArray[2]}
                    onChange={handleAnswerChange}
                    name={idArray[4]}
                    checked={dataArray == idArray[2] ? true : false}
                ></input>
                <label style={labelStyle} htmlFor={idArray[2]}>{idArray[2]}</label>
            </div>
            <div className='answer'>
                <input type="radio"
                    id={idArray[3]}
                    value={idArray[3]}
                    onChange={handleAnswerChange}
                    name={idArray[4]}
                    checked={dataArray == idArray[3] ? true : false}
                ></input>
                <label style={labelStyle} htmlFor={idArray[3]}>{idArray[3]}</label>
            </div>
        </div>)
}

