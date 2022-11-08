import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'







export const Tarjeta = (props) => {
  const [input_note, set_input_note ] = useState('');
  const [semitonos, set_semitonos ] = useState(0);
  const [output_note, set_output_note ] = useState('');

  
function callApi(texto) {
  
  // javascript if props.endpoint contains "transpose" then call transpose
  // else if props.endpoint contains "translate" then call translate
  // else call error

  console.log("callApi: " + texto);
  // sanitize input get out - 
  texto = texto.replace(/-/g, " ");
  texto = texto.replace(/–/g, " ");
  texto = texto.replace(/  +/g, ' ');
  console.log("callApi2: " + texto);

  let body='';
  if (props.endPoint.includes("transpose")) {
    console.log("transpose");
    body = {
    texto: texto,
    semitonos: props.semitonos
  }
} else {
  console.log("translate");
  body = {
    texto: texto
  }
}
  console.log(body);
  
  //Call to API
  axios.post("https://api.fastnotes.polverini.com.ar/"+props.endPoint, body).then(response => {
  console.log(response.data.transp);
  let output = [''];
  response.data.transp.forEach(element => {
    output.push(element + ' - ');
  });
  set_output_note(output);
  
})
}

const transpose_onenote = () => {

  callApi(input_note);
 
 };


  return (
  

    <div className={styles.card}>
            <h2>{props.title}</h2>
            <p >{props.description}</p>
            <p>{props.semitonos}</p>
            <input type="text" value={input_note} onChange={e => set_input_note(e.target.value)} />
            <h2>Result: {output_note}</h2>

          <button onClick={transpose_onenote}>{props.buttonText}</button>
          </div>
  )
}




