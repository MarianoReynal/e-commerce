import React, { useContext } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <BsFillCartPlusFill className="cartWidget"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}