const db = require('../config/db');

// A Agenda agrega Consulta + Profissional + Paciente numa visão de calendário
async function criar(dados) {
  const sql = `
    INSERT INTO Agenda (paciente_id, profissional_id, consulta_id, data_hora, status)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.paciente_id, dados.profissional_id, dados.consulta_id,
    dados.data_hora, dados.status ?? 'agendada'
  ]);
  return result;
}

async function listarTodos() {
  const sql = `
    SELECT a.*,
           p.nome  AS paciente_nome,
           pr.nome AS profissional_nome
    FROM Agenda a
    INNER JOIN PACIENTE     p  ON a.paciente_id     = p.id
    INNER JOIN PROFISSIONAL pr ON a.profissional_id = pr.id
    ORDER BY a.data_hora ASC
  `;
  const [rows] = await db.execute(sql);
  return rows;
}

async function buscarPorId(id) {
  const sql = `
    SELECT a.*,
           p.nome  AS paciente_nome,
           pr.nome AS profissional_nome
    FROM Agenda a
    INNER JOIN PACIENTE     p  ON a.paciente_id     = p.id
    INNER JOIN PROFISSIONAL pr ON a.profissional_id = pr.id
    WHERE a.id = ?
  `;
  const [rows] = await db.execute(sql, [id]);
  return rows[0];
}

// Retorna todos os agendamentos de um profissional em uma data específica
async function listarPorProfissionalEData(profissional_id, data) {
  const sql = `
    SELECT a.*,
           p.nome AS paciente_nome
    FROM Agenda a
    INNER JOIN PACIENTE p ON a.paciente_id = p.id
    WHERE a.profissional_id = ?
      AND DATE(a.data_hora) = ?
    ORDER BY a.data_hora ASC
  `;
  const [rows] = await db.execute(sql, [profissional_id, data]);
  return rows;
}

// Retorna todos os agendamentos de um paciente
async function listarPorPaciente(paciente_id) {
  const sql = `
    SELECT a.*,
           pr.nome AS profissional_nome
    FROM Agenda a
    INNER JOIN PROFISSIONAL pr ON a.profissional_id = pr.id
    WHERE a.paciente_id = ?
    ORDER BY a.data_hora DESC
  `;
  const [rows] = await db.execute(sql, [paciente_id]);
  return rows;
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Agenda SET data_hora=?, status=? WHERE id=?
  `;
  const [result] = await db.execute(sql, [dados.data_hora, dados.status, id]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Agenda WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, listarPorProfissionalEData, listarPorPaciente, atualizar, deletar };