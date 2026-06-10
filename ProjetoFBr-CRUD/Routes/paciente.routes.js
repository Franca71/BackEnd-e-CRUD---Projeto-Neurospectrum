const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/paciente.controller');

router.post('/',                          ctrl.criar);
router.get('/',                           ctrl.listarTodos);
router.get('/:id',                        ctrl.buscarPorId);
router.put('/:id',                        ctrl.atualizar);
router.delete('/:id',                     ctrl.deletar);

module.exports = router;