import React from 'react'

const Card = ({nombre, apellido, personaje}) => {

  return (
    <div>
        <h3>{nombre} {apellido}, elegiste el personaje {personaje}</h3>
        
    </div>
  )
}

export default Card