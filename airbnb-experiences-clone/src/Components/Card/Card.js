import './Card.css'
import star from './Star1.svg'

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0){
        badgeText = 'SOLD OUT';
    } else {
        badgeText = 'ONLINE';
    }

    return (
        <div >
            {badgeText && <div className="badge"><p>{badgeText}</p></div>}
            <img className="card" src={props.coverImg}></img>
            <div className='first-text'>
                <img src={star}></img>
                <span>{props.rating}</span>
                <span> ({props.review}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>From ${props.price} / person</p>
        </div>
    )
}

export default Card;