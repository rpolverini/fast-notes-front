import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { Tarjeta } from '../components/Tarjeta'



export default function RPage() {
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Notes - FrontEnd</title>
        <meta name="description" content="FastNotes FrontEnd - Thanks Next Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://fastnotes.polverini.com.ar">FastNotes!</a>
        </h1>
        
        
        {/* https://fastapi.tiangolo.com/tutorial/cors/ */}


        <p className={styles.description}>
          Get started transposing{' '}
          <code className={styles.code}>some Notes</code>
        </p>

        {/* Componente con titulo y contenido, con un textbox de input y salida  
        y con eso de manera generica q le pegue a la api*/}

      
        

        <div className={styles.grid}>
        
          <Tarjeta title="Transponer String 5 semitonos" buttonText="Transponer" description="Pones Notas en cifrado ej A# B C sin espacios detras" endPoint="transpose/string"/>
          <Tarjeta title="Popular to Americano " buttonText="Traducir" description="Pones Notas en notacion Popular ej LA# SI DO sin espacios detras" endPoint="translate/popularToAmericano"/>
          <Tarjeta title="Americano to Popular "  buttonText="Traducir" description="Pones Notas en Cifrado Americano ej A# B C sin espacios detras" endPoint="translate/americanoToPopular"/>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://polverini.com.ar/rpolverini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Polverini.com.ar
        </a>
      </footer>
    </div>
  )
}
