const Model = require('../models/profDisponibilidade.model');

async function criar(req, res) {
  try {
    const result = await Model.criar(req.body);
    res.status(201).json({ mensagem: 'Vínculo criado com sucesso!', id: result.insertId });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function listarTodos(req, res) {
  try {
    const dados = await Model.listarTodos();
    res.json(dados);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function listarPorProfissional(req, res) {
  try {
    const dados = await Model.listarPorProfissional(req.params.profissional_id);
    res.json(dados);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function deletar(req, res) {
  try {
    const result = await Model.deletar(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Vínculo não encontrado' });
    res.json({ mensagem: 'Vínculo removido com sucesso!' });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

module.exports = { criar, listarTodos, listarPorProfissional, deletar };