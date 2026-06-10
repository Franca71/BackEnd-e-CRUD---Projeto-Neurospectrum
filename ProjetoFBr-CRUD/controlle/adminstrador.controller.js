const Model = require('../models/administrador.model');

async function criar(req, res) {
  try {
    const result = await Model.criar(req.body);
    res.status(201).json({ mensagem: 'Administrador criado com sucesso!', id: result.insertId });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function listarTodos(req, res) {
  try {
    const dados = await Model.listarTodos();
    res.json(dados);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function buscarPorId(req, res) {
  try {
    const dado = await Model.buscarPorId(req.params.id);
    if (!dado) return res.status(404).json({ mensagem: 'Administrador não encontrado' });
    res.json(dado);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function atualizar(req, res) {
  try {
    const result = await Model.atualizar(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Administrador não encontrado' });
    res.json({ mensagem: 'Administrador atualizado com sucesso!' });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function deletar(req, res) {
  try {
    const result = await Model.deletar(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Administrador não encontrado' });
    res.json({ mensagem: 'Administrador deletado com sucesso!' });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };