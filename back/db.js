const mysql = require('mysql2')

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'prina71',
  database: 'db_iajourney'
};

// Função para criar o pool de conexões
const connectDB = async () => {
  try {
    const pool = await mysql.createPool(dbConfig);
    console.log('Conectado ao banco de dados MySQL.');
    return pool;
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados MySQL:', err);
    throw err;
  }
};

module.exports = connectDB;