import React from "react";
import emojiFrio from '../img/frio.png';
import './frio.css';

const Frio = () =>{
    return(
<div className="bg-frio">
    <h3>Hace Frio, mejor abrigarse</h3>
    <img src={emojiFrio} alt=""/>
</div>
    )
}

export default Frio;