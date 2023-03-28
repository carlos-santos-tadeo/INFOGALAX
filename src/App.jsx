import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'//se importa ContainerInfo
import db from "./db/db.json"  //se importa el json
//import bg1 from "./assets/images/bg1.jpg" //asi se agrega desde assets

const images = ["bg1", "bg2", "bg3", "bg4"]


function App() {

  //se pasa db a la funcion en la variable listItems
  const getRandomItem = (listItems) => {

    //obtiene un numero random del 1 - 14
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }

  //paso la db a la funcion getRandomItem
  const [quote, setQuote] = useState(getRandomItem(db))

  const [bgImage, setBgImage] = useState(getRandomItem(images))

  //funcion que al hacer clic al boton llama a la funcion getRandomItem para recargar los datos nuevamente
  const handleNewQuote = () => {
    setQuote(getRandomItem(db))
    setBgImage(getRandomItem(images))
  }

  return (
    <div className={`App ${bgImage}`}>

        {/* le paso la constante quote a ContainerInfo como props */}
        <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />

        {/* asi se agrega desde assets
      <img src={bg1} alt="" /> */}
      </div>
  )
}

export default App
