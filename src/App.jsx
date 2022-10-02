import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';

function App() {
  const [presupuesto,setPresupuesto] = useState("");
  const [validPresupuesto,setValidPresupuesto] = useState(false)
  const [modal,setModal] = useState(false);
  const [gastos,setGastos] = useState([]);
  const [gastoEditar,setGastoEditar] = useState({});
 
  const eliminarGasto = id=>{
    const gastosAct = gastos.filter(element=> element.id!== id)

    setGastos(gastosAct);
  }
  const guardarGasto=(gasto)=>{
    
    setGastos([...gastos,gasto]);
  }
  return (
    <div className="App">
      <Header gastos={gastos} setModal={setModal}validPresupuesto={validPresupuesto} setValidPresupuesto={setValidPresupuesto} setPresupuesto={setPresupuesto} presupuesto={presupuesto}/>

      {
        validPresupuesto && 
        (
          <>
            <main>
            <ListadoGastos setModal={setModal} eliminarGasto={eliminarGasto} setGastoEditar={setGastoEditar} gastoEditar={gastoEditar} gastos ={gastos}></ListadoGastos>
            </main>
          {modal || <button
          onClick={()=>{setModal(true); setGastoEditar({})}}> Añadir gasto 
          </button>}
          </>
        
        )  
    }
      {modal && <Modal setGastoEditar={setGastoEditar}setGastos={setGastos} gastos={gastos}gastoEditar={gastoEditar} setModal={setModal} guardarGasto={guardarGasto}/>
      }

      
    </div>
  )
}

export default App
