import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Clima from './pages/Clima'
import Dicas from './pages/Dicas'
import Chatravel from './pages/Chatravel'
import Sobre from './pages/Sobre'

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
    },
    {
        path: "/chat",
        element: <Chatravel />
    },
    {
        path: "/sobre",
        element: <Sobre />
    }
])

export default rotas