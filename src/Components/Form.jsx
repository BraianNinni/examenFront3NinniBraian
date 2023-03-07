import React from "react";
import { useState } from "react";
import Card from './Card'
const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        personaje: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.nombre.startsWith(" ") == false && (user.apellido.length > 6)) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Apellido</label>
            <input type="text" value={user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})}/>
            <label>Personaje del Lol</label>
            <input type="text" value={user.personaje} onChange={(e) => setUser({...user, personaje: e.target.value})}/>
          
            <button>Enviar</button>
            {err && 'Por favor chequea que la informacion sea correcta'}
        </form>
        {show  && <Card nombre={user.nombre} apellido={user.apellido} personaje={user.personaje}/>}
        
       
    </div>
  )
  }

export default Form