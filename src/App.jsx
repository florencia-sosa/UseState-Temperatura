import React, { useState } from "react";
import Frio from "./componente/frio";
import Calor from "./componente/calor";
import "./app.css";



const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(19)
  const Subir = () => {
    setTemperatura(temperatura + 1)
  }
  const Bajar = () => {
    setTemperatura(temperatura - 1)
  }

  return (

    <div className='container'
    >

      {temperatura > 21 ? : <Frio />}
      <h1>Si la temperatura es: {temperatura} º  </h1>
      <p>
        {
          temperatura > 21 ? <Calor /> : <Frio />
        }
      </p>
      <div className='action'>
        <button className='btn-calor' id='CambiarFondo' onChange='CambiarFondo' onClick={Subir}>Aumentar temperatura</button>
        <button className='btn-frio' onClick={Bajar}>Reducir temperatura</button>
      </div>
    </div>
  );
}


export default Temperatura;
