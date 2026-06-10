const db = require('../config/db');

// ─── CREATE ─────────────────────────────────────────
async function criar(dados) {
  const sql = `
    INSERT INTO PACIENTE
      (nome, data_nascimento, cpf, telefone, email, endereco, convenio, num_convenio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const valores = [
    dados.nome, dados.data_nascimento, dados.cpf,
    dados.telefone, dados.email, dados.endereco,
    dados.convenio, dados.num_convenio
  ];
  const [result] = await db.execute(sql, valores);
  return result; // result.insertId → ID do novo registro
}

// ─── READ ALL ────────────────────────────────────────
async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM PACIENTE');
  return rows;
}

// ─── READ ONE ────────────────────────────────────────
async function buscarPorId(id) {
  const [rows] = await db.execute(
    'SELECT * FROM PACIENTE WHERE id = ?', [id]
  );
  return rows[0]; // Retorna o primeiro (ou undefined)
}

// ─── UPDATE ──────────────────────────────────────────
async function atualizar(id, dados) {
  const sql = `
    UPDATE PACIENTE SET
      nome=?, telefone=?, email=?, endereco=?,
      convenio=?, num_convenio=?
    WHERE id=?
  `;
  const valores = [
    dados.nome, dados.telefone, dados.email,
    dados.endereco, dados.convenio, dados.num_convenio, id
  ];
  const [result] = await db.execute(sql, valores);
  return result; // result.affectedRows → quantas linhas mudaram
}

// ─── DELETE ──────────────────────────────────────────
async function deletar(id) {
  const [result] = await db.execute(
    'DELETE FROM PACIENTE WHERE id = ?', [id]
  );
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };
        