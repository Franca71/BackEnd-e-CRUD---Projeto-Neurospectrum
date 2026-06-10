const Model = require('../models/receita.model');

async function criar(req, res) {
  try {
    const result = await Model.criar(req.body);
    res.status(201).json({ mensagem: 'Receita criada com sucesso!', id: result.insertId });
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
    if (!dado) return res.status(404).json({ mensagem: 'Receita não encontrada' });
    res.json(dado);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function listarPorPaciente(req, res) {
  try {
    const dados = await Model.listarPorPaciente(req.params.paciente_id);
    res.json(dados);
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function atualizar(req, res) {
  try {
    const result = await Model.atualizar(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Receita não encontrada' });
    res.json({ mensagem: 'Receita atualizada com sucesso!' });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

async function deletar(req, res) {
  try {
    const result = await Model.deletar(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Receita não encontrada' });
    res.json({ mensagem: 'Receita deletada com sucesso!' });
  } catch (erro) { res.status(500).json({ erro: erro.message }); }
}

module.exports = { criar, listarTodos, buscarPorId, listarPorPaciente, atualizar, deletar };