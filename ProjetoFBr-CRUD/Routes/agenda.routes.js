const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/agenda.controller');

// POST   /agenda                                           → criar agendamento
// GET    /agenda                                           → listar todos
// GET    /agenda/:id                                       → buscar por ID
// GET    /agenda/profissional/:profissional_id?data=       → agenda do dia do profissional
// GET    /agenda/paciente/:paciente_id                     → agendamentos do paciente
// PUT    /agenda/:id                                       → atualizar
// DELETE /agenda/:id                                       → deletar

router.post('/',                                          ctrl.criar);
router.get('/',                                           ctrl.listarTodos);
router.get('/profissional/:profissional_id',              ctrl.listarPorProfissionalEData);
router.get('/paciente/:paciente_id',                      ctrl.listarPorPaciente);
router.get('/:id',                                        ctrl.buscarPorId);
router.put('/:id',                                        ctrl.atualizar);
router.delete('/:id',                                     ctrl.deletar);

module.exports = router;