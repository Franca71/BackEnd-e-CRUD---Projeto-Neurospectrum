const db = require('../config/db');

async function criar(dados) {
  const sql = `
    INSERT INTO Administrador (nome, cpf, email, senha, telefone, ativo)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    dados.nome, dados.cpf, dados.email, dados.senha,
    dados.telefone, dados.ativo ?? 1
  ]);
  return result;
}

async function listarTodos() {
  // Nunca retorna a senha
  const [rows] = await db.execute(
    'SELECT id, nome, cpf, email, telefone, ativo, criado_em FROM Administrador'
  );
  return rows;
}

async function buscarPorId(id) {
  const [rows] = await db.execute(
    'SELECT id, nome, cpf, email, telefone, ativo, criado_em FROM Administrador WHERE id = ?', [id]
  );
  return rows[0];
}

async function atualizar(id, dados) {
  const sql = `
    UPDATE Administrador SET nome=?, email=?, telefone=?, ativo=? WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    dados.nome, dados.email, dados.telefone, dados.ativo, id
  ]);
  return result;
}

async function deletar(id) {
  const [result] = await db.execute('DELETE FROM Administrador WHERE id = ?', [id]);
  return result;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };