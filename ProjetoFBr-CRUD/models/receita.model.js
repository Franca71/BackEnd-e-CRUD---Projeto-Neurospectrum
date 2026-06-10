const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Receita (consulta_id, paciente_id, descricao, medicamento, dosagem, instrucoes, data_emissao)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.consulta_id, dados.paciente_id, dados.descricao,
    dados.medicamento, dados.dosagem, dados.instrucoes,
    dados.data_emissao ?? new Date()
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM Receita ORDER BY data_emissao DESC');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM Receita WHERE id = ?', [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM Receita WHERE paciente_id = ? ORDER BY data_emissao DESC', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Receita SET descricao=?, medicamento=?, dosagem=?, instrucoes=? WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.descricao, dados.medicamento, dados.dosagem, dados.instrucoes, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Receita WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };