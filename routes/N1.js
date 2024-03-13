const express = require('express')
const router = express.Router()


router.post('/ex1', function (req, res) {

    const { n1, n2, n3, n4 } = req.body

    const media = (n1 + n2 + n3 + n4) / 4

    let mensagem;
    if (media >= 7) {
        mensagem = 'Aprovado';
    } else if (media >= 5 && media < 7) {
        mensagem = 'Recuperação';
    } else {
        mensagem = 'Reprovado';
    }
    res.json({ media, mensagem })
})

router.post('/ex2', function (req, res) {
    const eleitores = Number(req.body.eleitores)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > eleitores) {

        retorno = {
            codigo: 'soma_de_eleitores',
            mensagem: "erro: a soma dos votos não pode ultrapassar o total de eleitores.        "
        }

        res.status(200).json(retorno)

    } else {
        const percentualbrancos = brancos / eleitores * 100
        const percentualvalidos = validos / eleitores * 100
        const percentualnulos = nulos / eleitores * 100


        retorno = { percentualbrancos, percentualnulos, percentualvalidos }

        res.status(200).json(retorno)
    }

})
router.post('/ex3', function (req, res) {
        const salario = Number(req.body.salario);

        const reajuste = 0.07;

        const novosalario = salario * (1 + reajuste);

        retorno = {
            codigo: novosalario,
            mensagem: "Novo salario"
        }

    res.status(200).json(retorno)
})

router.post('/ex4', function (req, res) {

        const custo = Number(req.body.custo)
        const distribuidor = custo * 28 / 100
        const impostos = custo * 45 / 100
        const custofinal = custo + distribuidor + impostos

        const resposta = {
            custofinal: custofinal
        }

        res.json(resposta)
})

router.post('/ex5', function(req, res){

    const {custoFabrica, percentualDistribuidor, percentualImposto} = req.body
    const custoDistribuidor =  custoFabrica * Number(percentualDistribuidor/100)
    const custoImposto = custoFabrica * (Number(percentualImposto) /100)
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto

    const resposta = {
        custoFinal: custoFinal}
        
    res.json(resposta) 

})
router.post('/ex6', function(req, res){

    const { vendas, valorPorCarro, totalvendas, salariofixo} = req.body
    const pagamentoPorCarro = Number( vendas) * Number(valorPorCarro)
    const pagamentoPorVenda = (Number(totalvendas) * 5 /100)
    const salarioFinal = Number(salariofixo) + pagamentoPorCarro + pagamentoPorVenda

    const resposta = {
        salarioFinal: salarioFinal}
        
    res.json(resposta) 

})

router.post('/ex7', function(req, res){

    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)

    const soma = (nota1 * 0.4) + (nota2 * 0.6)
    const media = soma / (0.4 + 0.6)

    const resposta = {
        mediafinla: media
    }
    res.json(resposta)
})

router.post('/ex8', function(req, res){

    const {raio, altura} = req.body
    const pi = 3.14
    const volume = pi * raio ** 2 * altura
    const resposta = {
        Volume: volume }

   res.json(resposta)

})

router.post('/ex9', function(req, res){
    const {numero1, numero2} = req.body

    const soma = Number(numero1) + Number(numero2)
    const resultado = soma * numero1

    const resposta = {
        Resultado: resultado }

   res.json(resposta)
    
})


module.exports = router