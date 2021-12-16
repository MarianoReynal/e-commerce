import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'

export const CartItem = ({name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className='container' >
             <table className='table table-hover table-bordered table-sm '>   
                <thead>
                    <tr>
                        <th>PRODUCTO</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>   
                    <tr>
                        <td>{name}</td>
                        <td>${price}</td>
                        <td>{cantidad}</td>
                        <td>
                        <button className="btn btn-danger"
                                onClick={() => { removerDelCarrito(id) }}
                            >
                                <BsFillTrashFill/>
                            </button>
                        </td>
                    </tr>
                   
                
                </tbody> 
            
            </table>
        </div>
    )
}
