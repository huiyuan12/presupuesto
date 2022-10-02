import React, { useEffect, useState } from 'react'
import Error from './Error';

const Formulario = ({setValidPresupuesto,setPresupuesto,presupuesto}) => {
    const [error,setError] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        if(!presupuesto || presupuesto<0)
        {
            setError(true);
            return;
        }
        setValidPresupuesto(true);
        setError(false);
      
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Introduce tu presupuesto"
            value={presupuesto}
            onChange={e=>setPresupuesto(Number(e.target.value))}/>    
            <input type="submit" />
            {error&& <Error>Presupuesto no válido</Error>}
        </form>        
    </div>
  )
}

export default Formulario