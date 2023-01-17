import { useState } from 'react'
import {lista} from '../clientes/Lista.js'
export const ListaClientes = () => {

    const [clientes, setclientes] = useState(lista)
        console.log(clientes)

  return (
    <>
       <h1>{clientes.map(cliente =>{
        return <li key={cliente.nombre}> {cliente.nombre}</li>
       })}</h1>
    </>
  )
}
