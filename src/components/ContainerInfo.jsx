import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"


//recibo la constante quote y  handelNewQuote como props
const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className='containerInfo'>
      <h1 className='containerInfo__title'>Infogalax</h1>

      <Button handleNewQuote={handleNewQuote} />

      <article className='containerInfo__phrase'>
        {/* muestro la frase */}
        <p>{quote.phrase}</p>
      </article>

      <article className='containerInfo__author'>
        {/* muestro la fuente */}
        <h4>Fuente: {quote.author}</h4>
      </article>
    </section>
  )
}

// exportacion
export default ContainerInfo