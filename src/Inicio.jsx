import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Actualizar from './Actualizar'


const Inicio = () => {

  const url = "http://45.236.130.191/juegos.php"
  const [vjuegos, setVjuegos] = useState([])

  useEffect(() => {
    axios.get(url).then(response => {
      localStorage.setItem("vjuegos", JSON.stringify(response.data))
      setVjuegos(JSON.parse(localStorage.getItem("vjuegos")))
    })  
  
  }, [])
  



  return (
    <div className="container">
      <div className="col-6">
      <div className="col">
          <label htmlFor="genero" className="form-label">
            Genero
          </label>
          <input type="text" id="genero" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="juegos" className="form-label">
            Juegos
          </label>
          <input type="text" id="juegos" className="form-control" />
        </div>
        <div className="col">
          <label htmlFor="plataforma" className="form-label">
            Plataforma
          </label>
          <input type="text" id="plataforma" className="form-control" />
        </div>
        <div className="col-6">
          <button className="btn btn-succes">Guardar</button>
        </div>
      </div>

      <div className="col-6">
        <Actualizar vjuegos={vjuegos}/>
      </div>
        

    </div>
  )
}

export default Inicio