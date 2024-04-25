import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Clima from './pages/Clima'
import Dicas from './pages/Dicas'

const rotas = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/clima",
        element: <Clima />
    },
    {
        path: "/dicas",
        element: <Dicas />
    }
])

export default rotas