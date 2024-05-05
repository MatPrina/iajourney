const mysql = require('mysql2/promise');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'iajoyney'
});

// Exporte a conexão para ser utilizada em outros arquivos
module.exports = connection;