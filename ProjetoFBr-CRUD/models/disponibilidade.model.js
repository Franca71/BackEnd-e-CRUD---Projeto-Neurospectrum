const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO DISPONIBILIDADE (dia_semana, periodo, hora_inicio, hora_fim, ativo)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.dia_semana, dados.periodo, dados.hora_inicio,
    dados.hora_fim, dados.ativo ?? 1
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM DISPONIBILIDADE');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM DISPONIBILIDADE WHERE id = ?', [id]);
  return rows[0];
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE DISPONIBILIDADE SET dia_semana=?, periodo=?, hora_inicio=?, hora_fim=?, ativo=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.dia_semana, dados.periodo, dados.hora_inicio, dados.hora_fim, dados.ativo, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM DISPONIBILIDADE WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };