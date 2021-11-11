import React from 'react'
import './ItemListContainer.scss'
import {ProductCard} from "../ProductCard/ProductCard"

function ItemListContainer({greeting, usuario}) {
    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{usuario}</h2>
            <ProductCard/>
        </div>
    )
}

export default ItemListContainer
