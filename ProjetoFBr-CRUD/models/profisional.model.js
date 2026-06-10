const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO PROFISSIONAL (nome, cpf, crm_crp, tipo, especialidade, telefone, email, ativo)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.nome, dados.cpf, dados.crm_crp, dados.tipo,
    dados.especialidade, dados.telefone, dados.email,
    dados.ativo ?? 1
  ]);
  return result;
}

async function listarTodos() {
  const [rows] = await db.execute('SELECT * FROM PROFISSIONAL');
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute('SELECT * FROM PROFISSIONAL WHERE id = ?', [id]);
  return rows[0];
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE PROFISSIONAL SET
      nome=?, crm_crp=?, tipo=?, especialidade=?, telefone=?, email=?, ativo=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.nome, dados.crm_crp, dados.tipo, dados.especialidade,
    dados.telefone, dados.email, dados.ativo, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM PROFISSIONAL WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };