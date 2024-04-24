import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Clima from './pages/Clima'

const rotas = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/clima",
        element: <Clima />
    }
])

export default rotas