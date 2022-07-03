import './Dies.css'

export default function Dies (props) {
    const dieStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
    }

    return <div onClick={props.handleClick} id={props.id} style={dieStyle} className='die'>{props.value}</div>
}