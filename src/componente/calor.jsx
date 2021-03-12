import React from "react";
import emojiCalor from '../img/calor.png';
import './calor.css'


const Calor = () => {
    return (

        <div className='bg-calor'>
            <h3>Hace calor, mejor usar rompa liviana</h3>
            <img src={emojiCalor} alt="" />
        </div>
    )
}


export default Calor