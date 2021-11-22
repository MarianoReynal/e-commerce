import React from 'react'
import { useNavigate } from 'react-router'
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, desc, price, category}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    return (
        <div>
            <h2 className='text-center'>{name}</h2>
            <img src={img} alt={name}/>
            <p className='text-center'>{desc}</p>
            <p className='text-center'>Precio: ${price}</p>

            <ItemCount/>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}