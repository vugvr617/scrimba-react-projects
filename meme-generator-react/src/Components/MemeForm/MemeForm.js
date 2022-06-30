import './MemeForm.css'
import memeData from '../../memeData';
import React, { useState } from 'react';

const MemeForm = (props) => {
    const [dataArray, setData] = useState({
        newUrl: "",
        firstText: "",
        secondText: "",
    });

    const randomImage = (e) => {
        e.preventDefault();
        let randomNum = Math.floor(100 * Math.random());
        const memeUrl = memeData.data.memes[randomNum].url;
        setData((prevData) => {
            return {
                ...prevData,
                newUrl: memeUrl
            }
        });
    }

    function handleChange(e) {
        setData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <form>
            <div>
                <input name="firstText" onChange={handleChange} type='text'></input>
                <input name="secondText" onChange={handleChange} type='text'></input>
            </div>
            <input onClick={randomImage} className="submit-button" type="submit" value="Get a new meme image"></input>
            <div className="meme">
                <img src={dataArray.newUrl}></img>
                <h2 className="meme--text top">{dataArray.firstText}</h2>
                <h2 className="meme--text bottom">{dataArray.secondText}</h2>
            </div>
        </form>
    )
}

export default MemeForm;