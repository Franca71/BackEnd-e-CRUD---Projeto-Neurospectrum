const PacienteModel = require('../models/paciente.model');

// ─── CREATE ─────────────────────────────────────────
async function criar(req, res) {
  try {
    const result = await PacienteModel.criar(req.body);
    res.status(201).json({
      mensagem: 'Paciente criado com sucesso!',
      id: result.insertId
    });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

// ─── READ ALL ────────────────────────────────────────
async function listarTodos(req, res) {
  try {
    const pacientes = await PacienteModel.listarTodos();
    res.json(pacientes);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

// ─── READ ONE ────────────────────────────────────────
async function buscarPorId(req, res) {
  try {
    const paciente = await PacienteModel.buscarPorId(req.params.id);
    if (!paciente) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    }
    res.json(paciente);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

// ─── UPDATE ──────────────────────────────────────────
async function atualizar(req, res) {
  try {
    const result = await PacienteModel.atualizar(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    }
    res.json({ mensagem: 'Paciente atualizado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

// ─── DELETE ──────────────────────────────────────────
async function deletar(req, res) {
  try {
    const result = await PacienteModel.deletar(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Paciente não encontrado' });
    }
    res.json({ mensagem: 'Paciente deletado com sucesso!' });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };
        