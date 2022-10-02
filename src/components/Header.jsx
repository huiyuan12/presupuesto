import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import Formulario from './Formulario'

const Header = ({gastos,setModal,setValidPresupuesto, validPresupuesto, presupuesto,setPresupuesto}) => {
  return (
    <div>
        <h1>Control de Presupuestos</h1>
       {
        validPresupuesto?(
           <>
            <h2>Controla tu presupuesto</h2>
            <ControlPresupuesto gastos={gastos} presupuesto={presupuesto}/>
           </> 
        ):
        (
            <>
             <h2>Añade tu presupuesto</h2>
            <Formulario setModal={setModal}setValidPresupuesto={setValidPresupuesto}setPresupuesto={setPresupuesto} presupuesto={presupuesto}/>
            </>

        )
       }

    </div>
  )
}

export default Header