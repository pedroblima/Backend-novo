const express = require('express')
const router = express.Router()

router.post('/', function(req, res){
    res.send('Rota Principal usando Router')
})

router.post('/hello', function(req, res){
    res.send('Chegou a resposta')
})

router.post('/nome', function(req, res){
    res.send('Orion Teles de Mesquita')
})

module.exports = router