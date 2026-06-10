const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO CONSULTA
      (paciente_id, profissional_id, administrador_id, data_hora, duracao_min, status, modalidade, comparecimento, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.paciente_id, dados.profissional_id, dados.administrador_id ?? null,
    dados.data_hora, dados.duracao_min ?? 50,
    dados.status ?? 'agendada', dados.modalidade ?? 'presencial',
    dados.comparecimento ?? null, dados.observacoes ?? null
  ]);
  return result;
}

async function listarTodos() {
  // JOIN para retornar nomes junto com os IDs
  const sql = `
    SELECT c.*, p.nome AS paciente_nome, pr.nome AS profissional_nome
    FROM CONSULTA c
    INNER JOIN PACIENTE p  ON c.paciente_id     = p.id
    INNER JOIN PROFISSIONAL pr ON c.profissional_id = pr.id
    ORDER BY c.data_hora DESC
  `;
  const [rows] = await db.execute(sql);
  return rows;
}

async function buscarPorId(id) {
  const sql = `
    SELECT c.*, p.nome AS paciente_nome, pr.nome AS profissional_nome
    FROM CONSULTA c
    INNER JOIN PACIENTE p  ON c.paciente_id     = p.id
    INNER JOIN PROFISSIONAL pr ON c.profissional_id = pr.id
    WHERE c.id = ?
  `;
  const [rows] = await db.execute(sql, [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM CONSULTA WHERE paciente_id = ? ORDER BY data_hora DESC', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE CONSULTA SET
      data_hora=?, duracao_min=?, status=?, modalidade=?, comparecimento=?, observacoes=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.data_hora, dados.duracao_min, dados.status,
    dados.modalidade, dados.comparecimento, dados.observacoes, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM CONSULTA WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };