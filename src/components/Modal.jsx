import React, { useState,useEffect} from 'react'
import Error from './Error';
const Modal = ({setGastoEditar,gastos,setGastos,gastoEditar,setModal,guardarGasto}) => {
    const [nombre,setNombre] = useState("");
    const [cantidad,setCantidad] = useState("");
    const [categoria,setCategoria] = useState("");
    const [mensaje,setMensaje] = useState(false);
    
    useEffect(()=>{
        if(Object.keys(gastoEditar).length>0)
        {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
        }
    },[gastoEditar])
    const handleGasto=e=>{
        e.preventDefault();
        setGastoEditar({});
        if([nombre,cantidad,categoria].includes(""))
        {
            setMensaje(true);
            return;
        }
        setMensaje(false);

        const ObjGasto={
            nombre,
            cantidad,
            categoria,
           
        }

        if(gastoEditar.id)
        {
            ObjGasto.id = gastoEditar.id;
            const nuevosObj = gastos.map(element=> element.id == gastoEditar.id? ObjGasto: element);
            setGastos(nuevosObj);
            setNombre("");
            setCategoria("");
            setCantidad("");
            setModal(false);
            setGastoEditar({});
        }
        else{
            ObjGasto.id = new Date().getMilliseconds();
             guardarGasto(ObjGasto);
        }
        setNombre("");
        setCategoria("");
        setCantidad("");
        setGastoEditar({});
        setModal(false);
    }

  return (
    <div>
        <h3>Añade tu gasto</h3>
        <form>
            <div>
                <label htmlFor="nombre">Nombre Gasto:</label>
                <input type="text" placeholder="Nombre del gasto"
                value={nombre}
                onChange={e=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="nombre">Cantidad Gasto:</label>
                <input type="number" placeholder="Nombre del gasto"
                value={cantidad}
                onChange={e=>setCantidad(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="nombre">Categoría Gasto:</label>
                <select
                value={categoria}
                onChange={e=>setCategoria(e.target.value)}>
                    <option value="">Seleccione</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos varios">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="ahorro">Salud</option>
                </select>
            </div>
            <div>
                <input type="submit" value={gastoEditar.id? "Guardar cambios" : "Añadir gasto"}
                onClick={handleGasto}/>
            </div>

           

        <button onClick={()=>setModal(false)}>Cerrar modal</button>
        </form>
        {mensaje && <Error>Gasto no valido</Error>}
      
    </div>
  )
}

export default Modal