const express = require('express')
const router = express.Router()


router.post('/ex1', function(req, res){
    const numeros = req.body;

    // // for (let i = 0; i < numeros.length; i++) {
    // //     console.log(numeros[i])
    // // }

    // for (let n of numeros) {
    //     console.log(n)
    // }


    let soma = 0;
    for (let n of numeros) {
        // soma += n

        soma = soma + n
        console.log(soma)
    }

    res.json(numeros)
})

module.exports = router