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
    const totaldeeleitores = Number(req.body.totaldeeleitores)
    const votosbrancos = Number(req.body.votosbrancos)
    const votosnulos = Number(req.body.votosnulos)
    const votosvalidos = Number(req.body.votosvalidos)

    const soma = votosbrancos + votosnulos + votosvalidos

    let retorno = {}
    if (soma > totaldeeleitores) {

        retorno = {
            codigo: 'soma_de_eleitores',
            mensagem: "erro: a soma dos votos não pode ultrapassar o total de eleitores.        "
        }

        res.status(200).json(retorno)

    } else {
        const percentualbrancos = votosbrancos / totaldeeleitores * 100
        const percentualvalidos = votosvalidos / totaldeeleitores * 100
        const percentualnulos = votosnulos / totaldeeleitores * 100


        retorno = { percentualbrancos, percentualnulos, percentualvalidos }

        res.status(200).json(retorno)
    }

})
router.post('/ex3', function (req, res) {
        const salarioaatual = Number(req.body.salario);

        const reeajuste = 0.07;

        const salarioreajustado = salarioaatual * (1 + reeajuste);

        retorno = {
            codigo: salarioreajustado,
            mensagem: "Novo salario"
        }

    res.status(200).json(retorno)
})

router.post('/ex4', function (req, res) {

        const custodefabrica = Number(req.body.custodefabrica)
        const procentualdedistribuidor = custodefabrica * 28 / 100
        const porcentualdeimpostos = custodefabrica * 45 / 100
        const custofinalaoconsumidor = custodefabrica + procentualdedistribuidor + porcentualdeimpostos

        const resposta = {
            custofinalaoconsumidor: custofinalaoconsumidor
        }

        res.json(resposta)
})

router.post('/ex5', function (req, res) {
        
        const { custodefabrica, impostosdistribuidorfabricacao, impostos } = req.body
        const custoDistribuidor = custodefabrica * Number(impostosdistribuidorfabricacao / 100)
        const custoImposto = custodefabrica * (Number(impostos) / 100)
        const custofinal = custodefabrica + impostosdistribuidorfabricacao + impostos

        const resposta = {
            custoFinal: custofinal      
        }

        res.json(resposta)
})
router.post('/ex6', function(req, res){

    const { numerodevendas, valorPorCarro, vazlortotalvendas, salariofixo} = req.body
    const pagamentoPorCarro = Number( numerodevendas) * Number(valorPorCarro)
    const pagamentoPorVenda = (Number(vazlortotalvendas) * 5 /100)
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