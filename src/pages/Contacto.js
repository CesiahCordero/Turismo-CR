import React, { useState } from "react";
import footer from './footer.png';

import './Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [destino, setDestino] = useState("");

  const cambiarNombre = (e) => {
    const value = e.target.value;
    setNombre(value);
  };

  const cambiarEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const cambiarTelefono = (e) => {
    const value = e.target.value;
    setTelefono(value);
  };

  const cambiarDestino = (e) => {
    const value = e.target.value;
    setDestino(value);
  };

  const guardarClick = () => {
    console.log("Esta es mi estdo local: ", nombre, email, telefono, destino);
  };

  return (
    <div className="App">
      <h2>¡Vamos de viaje!</h2>
      <po>¿Qué esperas? No lo dudes más, 
        <br />escríbenos y en breve nos pondremos en contacto contigo.</po>
      <label>Nombre: </label>
      <input
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={cambiarNombre}
      ></input>

      <label>Email: </label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={cambiarEmail}
      ></input>

      <label>Telefono: </label>
      <input
        id="telefono"
        name="telefono"
        value={telefono}
        onChange={cambiarTelefono}
      ></input>

      <label>Destino: </label>
      <input
        id="destino"
        name="destino"
        value={destino}
        onChange={cambiarDestino}
      ></input>

      <button onClick={guardarClick} className="boton"><h>Enviar</h></button>
    
      <img src={footer} alt="footer" className="pie"/>
    </div>
  );
}

export default Contacto;
