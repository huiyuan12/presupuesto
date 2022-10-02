import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({gastos,presupuesto}) => {

    const [disponible,setDisponible] = useState(0)
    const [gastado,setGastado] = useState("")
  useEffect(()=>{
    if(Object.keys(gastos).length>=0)
    {
        console.log("Cambios")
        const presDisponible = gastos.reduce((acum,element)=> acum+element.cantidad,0);
        const final = presupuesto - presDisponible;
        setDisponible(final);
        setGastado(presDisponible);
    }
  },[gastos])
 return (
    <div>
        <div>
            <p>Grafica aqui</p>
        </div>
        <div>
            <p>Presupuesto: ${presupuesto}</p>
            <p>Disponible: {disponible}</p>
            <p>Gastado: {gastado}</p>
        </div>
    </div>
  )
}

export default ControlPresupuesto