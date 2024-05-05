import React from 'react'
import rotas from './router.js'
import { RouterProvider } from 'react-router-dom'

const App = () => {
    return (
        <RouterProvider router={rotas}/>
    )
}

const connection = require('./db');

// Agora você pode usar a conexão para executar consultas SQL
async function fetchData() {
  try {
    const [rows, fields] = await connection.execute('SELECT * FROM sua_tabela');
    console.log(rows);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

fetchData();

export default App