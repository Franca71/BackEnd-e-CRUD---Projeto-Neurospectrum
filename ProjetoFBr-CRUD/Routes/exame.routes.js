const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/exame.controller');

// POST   /exames                                       → solicitar exame
// GET    /exames                                       → listar todos
// GET    /exames/:id                                   → buscar por ID
// GET    /exames/paciente/:paciente_id                 → listar por paciente
// PUT    /exames/:id                                   → atualizar resultado/status
// DELETE /exames/:id                                   → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;