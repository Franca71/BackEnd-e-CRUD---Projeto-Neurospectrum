const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Ligação à base de dados MySQL (Aiven) com SSL ativado
const db = mysql.createConnection({
  host: process.env.DB_HOST ? process.env.DB_HOST.trim() : '',
  port: process.env.DB_PORT ? process.env.DB_PORT.trim() : 28697,
  user: process.env.DB_USER ? process.env.DB_USER.trim() : '',
  password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD.trim() : '',
  database: process.env.DB_NAME ? process.env.DB_NAME.trim() : '',
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar à base de dados:', err);
    return;
  }
  console.log('Conectado com sucesso à base de dados MySQL no Aiven!');
});

// Rota de teste
app.get('/', (req, res) => {
  res.json({ status: 'API Neurospectrum a funcionar com sucesso!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
