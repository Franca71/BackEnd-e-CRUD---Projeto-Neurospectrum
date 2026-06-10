const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/consulta.controller');

// POST   /consultas                                    → agendar consulta
// GET    /consultas                                    → listar todas
// GET    /consultas/:id                                → buscar por ID
// GET    /consultas/paciente/:paciente_id              → listar por paciente
// PUT    /consultas/:id                                → atualizar
// DELETE /consultas/:id                                → deletar

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/paciente/:paciente_id',                  ctrl.listarPorPaciente);
router.get('/:id',                                    ctrl.buscarPorId);
router.put('/:id',                                    ctrl.atualizar);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;