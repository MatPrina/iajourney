import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Clima from './pages/Clima'
import Dicas from './pages/Dicas'
import Chatravel from './pages/Chatravel'

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
    }
])

export default rotas