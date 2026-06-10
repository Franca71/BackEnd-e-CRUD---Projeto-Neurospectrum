const db = require('../config/db');

// Tabela de junção: associa um profissional a uma disponibilidade
async function criar(dados) {
  const sql = `
    INSERT INTO Prof_Disponibilidade (profissional_id, disponibilidade_id)
    VALUES (?, ?)
  `;
  const [result] = await db.execute(sql, [dados.profissional_id, dados.disponibilidade_id]);
  return result;
}

// Lista disponibilidades de um profissional específico (JOIN)
async function listarPorProfissional(profissional_id) {
  const sql = `
    SELECT pd.id, d.dia_semana, d.periodo, d.hora_inicio, d.hora_fim
    FROM Prof_Disponibilidade pd
    INNER JOIN DISPONIBILIDADE d ON pd.disponibilidade_id = d.id
    WHERE pd.profissional_id = ?
  `;
  const [rows] = await db.execute(sql, [profissional_id]);
  return rows;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM Prof_Disponibilidade');
  return rows;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Prof_Disponibilidade WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarPorProfissional, listarTodos, deletar };