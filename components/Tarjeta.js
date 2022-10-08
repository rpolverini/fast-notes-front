import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'







export const Tarjeta = (props) => {
  const [input_note, set_input_note ] = useState('');
  const [output_note, set_output_note ] = useState('');

  
function callApi(texto) {
  
  // javascript if props.endpoint contains "transpose" then call transpose
  // else if props.endpoint contains "translate" then call translate
  // else call error
  let body='';
  if (props.endPoint.includes("transpose")) {
    console.log("transpose");
    body = {
    texto: texto,
    semitonos: 2 //saxo alto to tenor
  }
} else {
  console.log("translate");
  body = {
    texto: texto
  }
}
  console.log(body);
  
  //Call to API
  axios.post("http://api.fastnotes.polverini.com.ar/"+props.endPoint, body).then(response => {
  console.log(response.data.transp);
  set_output_note(response.data.transp);
  
})
}

const transpose_onenote = () => {
  callApi(input_note);
  
 };


  return (
  

    <div className={styles.card}>
            <h2>{props.title}</h2>
            <p >{props.description}</p>
            <input type="text" value={input_note} onChange={e => set_input_note(e.target.value)} />
            <h2>Result: {output_note}</h2>

          <button onClick={transpose_onenote}>{props.buttonText}</button>
          </div>
  )
}




