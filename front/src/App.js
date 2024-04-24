import React from 'react'
import rotas from './router.js'
import { RouterProvider } from 'react-router-dom'

const App = () => {
    return (
        <RouterProvider router={rotas}/>
    )
}

export default App