import './Start.css'

export default function Start(props) {
    const mainStyle = {
        display: props.isStarted ? 'none' : 'flex'
    }

    return (<div style={mainStyle} className='starting-div'>
        <div className="start-text-div">
            <h1>Quizzical</h1>
            {/* <input type="text" placeholder='enter your name'></input> */}
            <p>
                5 questions from various topics.
            </p>
            <button onClick={props.handleStartClick}>Start quiz</button>
        </div>
    </div>)
}

