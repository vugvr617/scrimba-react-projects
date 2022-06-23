import './HeroPart.css';
import image from './image-group.svg'

function HeroPart() {
    return (
        <div className='inner'>
            <div className='hero-div'>
                <img className='image-box' src={image} alt='Photos group'></img>
                <div className='second-inner'>
                    <h1>Online Experiences</h1>
                    <p className='hero-p'>Join unique interactive activities led 
                        by one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroPart;