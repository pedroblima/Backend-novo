const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.send('Rota Principal usando Router')
})

router.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

router.get('/nome', function(req, res){
    res.send('Orion Teles de Mesquita')
})

module.exports = router