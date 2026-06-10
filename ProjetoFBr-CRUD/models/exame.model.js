const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Exame
      (consulta_id, paciente_id, tipo_exame, descricao, data_solicitacao, data_resultado, resultado, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.consulta_id, dados.paciente_id, dados.tipo_exame,
    dados.descricao, dados.data_solicitacao ?? new Date(),
    dados.data_resultado ?? null, dados.resultado ?? null,
    dados.status ?? 'solicitado'
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM Exame ORDER BY data_solicitacao DESC');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM Exame WHERE id = ?', [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM Exame WHERE paciente_id = ? ORDER BY data_solicitacao DESC', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Exame SET data_resultado=?, resultado=?, status=? WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.data_resultado, dados.resultado, dados.status, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Exame WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };