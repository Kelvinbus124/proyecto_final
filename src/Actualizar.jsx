import React from 'react'

const Actualizar = ({vjuegos}) => {
  return (
    <>
    <table className="table table-striped">
          <thead>
            <tr>
              <th>nombre</th>
              <th>Juegos</th>
              <th>Plataforma</th>
            </tr>
          </thead>
          <tbody>
              {
                vjuegos.map(v => (
                  <tr key={v.id}> 
                    <td>{v.id}</td>
                    <td>{v.juegos}</td>
                    <td>{v.plataforma}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    </>
  )
}

export default Actualizar