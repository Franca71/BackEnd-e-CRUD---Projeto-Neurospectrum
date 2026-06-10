const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/profDisponibilidade.controller');

// POST   /prof-disponibilidade                          → criar vínculo
// GET    /prof-disponibilidade                          → listar todos
// GET    /prof-disponibilidade/profissional/:id         → listar por profissional
// DELETE /prof-disponibilidade/:id                      → remover vínculo

router.post('/',                                      ctrl.criar);
router.get('/',                                       ctrl.listarTodos);
router.get('/profissional/:profissional_id',          ctrl.listarPorProfissional);
router.delete('/:id',                                 ctrl.deletar);

module.exports = router;