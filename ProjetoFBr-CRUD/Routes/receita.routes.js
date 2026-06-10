const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/receita.controller');

// POST   /receitas                                     → criar receita
// GET    /receitas                                     → listar todas
// GET    /receitas/:id                                 → buscar por ID
// GET    /receitas/paciente/:paciente_id               → listar por paciente
// PUT    /receitas/:id                                 → atualizar
// DELETE /receitas/:id                                 → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;