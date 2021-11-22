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