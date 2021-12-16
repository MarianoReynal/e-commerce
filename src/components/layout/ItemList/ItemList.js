import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {

    return (
        <Container className="my-5">
            
        <section className="container">
        <div className="row">
        <div className="col-lg-12 col-xs-12 text-center">
        <h1 className="text-uppercase h6 primerTitulo">INICIO</h1>
        <h2 className="text-capitalize"><strong>Bienvenidos</strong></h2>
        <p>
        Estas son nuestras mejores <strong>vestimentas</strong> para estar a la moda
        </p>
        </div>
        </div>
        </section>
            
            <Row style={{display:"flex" ,justifyContent:"center"}}>
                {/* {items.map((prod) => <Item prod={prod}/>)} */}
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}