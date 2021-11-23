import React from 'react'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="my-3">
            <button className="btn btn-outline-primary" onClick={handleRestar}>
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>
                +
            </button>
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    )
}



/*
import React,{useState} from "react";


const stock = 10 ;
export const ItemCount = () =>{
   
    const[counter,setCounter] = useState(1);

    const incrementar = () =>{
        if(stock>counter){
        setCounter(counter+1);
        }else{
            alert ("no hay mas stock")
        }
    }


    const decrementar = () =>{
        if(counter>1){
        setCounter(counter-1);
        }else{
            alert ("no se puede disminuir mas")
        }
    }
    
    const respuesta = () =>{
        alert (counter)
    }



return(
<div>
    <strong>{counter}</strong>
    <div>
        <button className="btn btn-primary"  onClick={decrementar}>-</button>
        <button className="btn btn-primary"  onClick={incrementar}>+</button>
    </div>
        <button className="btn btn-primary"  size="lg" onClick={respuesta}>
         Agregar al carro
         </button>
</div>

)
}
*/