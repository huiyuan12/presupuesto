import React from 'react'

const Gasto = ({setModal,eliminarGasto,gastoEditar, setGastoEditar,gasto}) => {

    const handleEditar=()=>{
        setGastoEditar(gasto); 
        setModal(true);
    }
  return (
   <div>
    <h2>Gasto</h2>
     <p>Nombre gasto: {gasto.nombre}</p>
    <p>Cantidad gasto:{gasto.cantidad}</p>
    <p>Categoria gasto:{gasto.categoria}</p>

    <button onClick={()=>eliminarGasto(gasto.id)}>Eliminar Gasto</button>
    <button onClick={handleEditar}>Editar Gasto</button>
   </div>
  )
}

export default Gasto