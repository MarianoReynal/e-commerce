import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../components/layout/CartView/CartView'
import { ItemDetailContainer } from '../components/layout/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/layout/ItemListContainer/ItemListContainer'
import { Checkout } from '../components/layout/Checkout/Checkout.js'

export const AppRouter = () => {

    const routes = useRoutes([
        {path: "/", element: <ItemListContainer/>},
        {path: "/productos/:catId", element: <ItemListContainer/>},
        {path: "/detail/:itemId", element: <ItemDetailContainer/>},
        {path: "/cart", element: <CartView/>},
        {path: "/checkout", element: <Checkout/>},
        {path: "*", element: <Navigate to="/"/>}
    ])

    return routes
}