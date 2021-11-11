import React,{useState} from "react";
import {button} from "react-bootstrap"

export const ItemCount = ({stock}) =>{
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
        alert ("Agregaste ${counter}")
    }



return(
<div>
    <strong>{counter}</strong>
    <div>
        <button variant="primary" onClick={decrementar}>-</button>
        <button variant="primary" onClick={incrementar}>+</button>
    </div>
        <button variant="primary" size="lg" onClick={respuesta}>
         Agregar al carro
         </button>
</div>

)

}