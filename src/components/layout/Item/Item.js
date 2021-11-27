import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, img, desc, price, category}) => {

    return (
        <article key={id} className="card m-4" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title text-center">{name}</h3>
                <p className="card-text text-center">Precio: ${price}</p>
                <p className="card-text text-center">{desc}</p>
                <p className="card-text text-center">{category}</p>
                <Link to={`/detail/${id}`} className="btn btn-primary text-center">Ver más</Link>
            </div>
        </article>
    )
}