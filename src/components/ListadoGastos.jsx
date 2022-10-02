import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({setModal, eliminarGasto,setGastoEditar,gastoEditar,gastos}) => {
  return (
    <div>
     {gastos.length ? (
     <>   
        <h2>Listado de Gastos</h2>
        {
            gastos.map(element=>(
            <Gasto setModal= {setModal}eliminarGasto={eliminarGasto} gastoEditar={gastoEditar} setGastoEditar={setGastoEditar} gasto={element} key={element.id}/>
            ))
        }
        </>)
        :
        (
            <>
            <h2>Aún no hay gastos</h2>
            </>
        )
        }
    </div>
  )
}

export default ListadoGastos