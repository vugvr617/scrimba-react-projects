import './Cards.css'

const Cards = (props) => {
    return (
        <div>
            <div className="card-div">
                <div>
                    <img src={props.img} alt="CardImage" className="card-image"></img>
                </div>
                <div>
                    <div className="inner-div">
                        <img src="/loc-icon.svg"></img>
                        <span> {props.country}</span>
                        <h1>{props.title}</h1>
                        <div className="date-div">
                            <span>{props.entry}</span>
                            <span> - </span>
                            <span>{props.leave}</span>
                        </div>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Cards;
