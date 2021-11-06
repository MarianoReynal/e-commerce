import React from 'react'
import './ItemListContainer.scss'

function ItemListContainer({greeting, usuario}) {
    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{usuario}</h2>
        </div>
    )
}

export default ItemListContainer
