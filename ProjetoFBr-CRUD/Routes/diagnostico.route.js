const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/diagnostico.controller');

// POST   /diagnosticos                                 → registrar diagnóstico
// GET    /diagnosticos                                 → listar todos
// GET    /diagnosticos/:id                             → buscar por ID
// GET    /diagnosticos/paciente/:paciente_id           → listar por paciente
// PUT    /diagnosticos/:id                             → atualizar
// DELETE /diagnosticos/:id                             → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;