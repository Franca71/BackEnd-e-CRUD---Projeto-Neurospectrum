const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Prontuario
      (paciente_id, profissional_id, consulta_id, data_registro, queixa_principal, avaliacao, plano_tratamento, prescricao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.paciente_id, dados.profissional_id, dados.consulta_id,
    dados.data_registro ?? new Date(), dados.queixa_principal,
    dados.avaliacao ?? null, dados.plano_tratamento ?? null, dados.prescricao ?? null
  ]);
  return result;
}

async function listarTodos() {
  const sql = `
    SELECT pr.*, p.nome AS paciente_nome, prof.nome AS profissional_nome
    FROM Prontuario pr
    INNER JOIN PACIENTE p    ON pr.paciente_id     = p.id
    INNER JOIN PROFISSIONAL prof ON pr.profissional_id = prof.id
    ORDER BY pr.data_registro DESC
  `;
  const [rows] = await db.execute(sql);
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM Prontuario WHERE id = ?', [id]);
  return rows[0];
}

async function listarPorPaciente(paciente_id) {
  const [rows] = await db.execute(
    'SELECT * FROM Prontuario WHERE paciente_id = ? ORDER BY data_registro DESC', [paciente_id]
  );
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Prontuario SET queixa_principal=?, avaliacao=?, plano_tratamento=?, prescricao=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.queixa_principal, dados.avaliacao, dados.plano_tratamento, dados.prescricao, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Prontuario WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };