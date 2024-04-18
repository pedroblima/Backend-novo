const express = require('express');
const router = express.Router();

const CargoController = require('../controller/CargoController');

router.get('/cargo', (req, res) => CargoController.getAll(req, res));
router.post('/cargo', (req, res) => CargoController.create(req,res));
router.put('/cargo/:id/reajuste', (req, res) => CargoController.calcularReajuste(req,res));
router.get('/cargo/utilizados/:nomeCargo', (req, res) => CargoController.getCargosUtilizados(req, res));

module.exports = router;
