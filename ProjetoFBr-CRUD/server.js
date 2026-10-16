const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Ligação à base de dados MySQL (Aiven) usando as variáveis de ambiente do Render
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
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
