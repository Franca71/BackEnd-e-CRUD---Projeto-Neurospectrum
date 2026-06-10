const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/tratamento.controller');

// POST   /tratamentos                                  → criar tratamento
// GET    /tratamentos                                  → listar todos
// GET    /tratamentos/:id                              → buscar por ID
// GET    /tratamentos/paciente/:paciente_id            → listar por paciente
// PUT    /tratamentos/:id                              → atualizar
// DELETE /tratamentos/:id                              → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;