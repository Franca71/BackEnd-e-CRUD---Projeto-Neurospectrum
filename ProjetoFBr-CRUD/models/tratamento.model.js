const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Tratamento (consulta_id, paciente_id, descricao, data_inicio, data_fim, status, observacoes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.consulta_id, dados.paciente_id, dados.descricao,
    dados.data_inicio, dados.data_fim ?? null,
    dados.status ?? 'em_andamento', dados.observacoes ?? null
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM Tratamento');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM Tratamento WHERE id = ?', [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM Tratamento WHERE paciente_id = ?', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Tratamento SET descricao=?, data_inicio=?, data_fim=?, status=?, observacoes=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.descricao, dados.data_inicio, dados.data_fim,
    dados.status, dados.observacoes, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Tratamento WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };