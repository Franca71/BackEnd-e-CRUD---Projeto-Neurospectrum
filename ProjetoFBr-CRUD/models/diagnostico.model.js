const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Diagnostico (consulta_id, paciente_id, cid, descricao, data_registro)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.consulta_id, dados.paciente_id, dados.cid,
    dados.descricao, dados.data_registro ?? new Date()
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM Diagnostico ORDER BY data_registro DESC');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM Diagnostico WHERE id = ?', [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM Diagnostico WHERE paciente_id = ? ORDER BY data_registro DESC', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `UPDATE Diagnostico SET cid=?, descricao=? WHERE id=?`;
  const [result] = await db.execute(sql, [dados.cid, dados.descricao, id]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Diagnostico WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };