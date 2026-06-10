const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/prontuario.controller');

// POST   /prontuarios                                  → criar prontuário
// GET    /prontuarios                                  → listar todos
// GET    /prontuarios/:id                              → buscar por ID
// GET    /prontuarios/paciente/:paciente_id            → histórico do paciente
// PUT    /prontuarios/:id                              → atualizar
// DELETE /prontuarios/:id                              → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;