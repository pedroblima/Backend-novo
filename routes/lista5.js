const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
    
    const { numeros } = req.body;

    const Numeros = numeros.map(num => Number(num));

    let soma = 0;

    for (let i = 0; i < Numeros.length; i++) {
        soma += Numeros[i];
    }

    const media = soma / Numeros.length;

    res.json({ media });
});

router.post('/ex2', function (req, res) {

    const { valores } = req.body;

    let valormaior = valores[0];
    let valormenor = valores[0];

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > valormaior) {
            valormaior = valores[i];
        }
        if (valores[i] < valormenor) {
            valormenor = valores[i];
        }
    }
    res.json({ valormaior, valormenor });
});

router.get('/ex3', function (req, res) {

    let num = [];
    for (let i = 1; i <= 10; i++) {
        num.push(i);
    }
    res.send(num);
});

router.get('/ex4', function (req, res) {

    let num = [];
    for (let i = 10; i >= 1; i--) {
        num.push(i);
    }
    res.send(num);
});

router.get('/ex5', function (req, res) {

    let numeros = [];
    let count = 0;
    let num = 101;

    while (count < 10) {
        numeros.push(num);
        num++;
        count++;
    }

    res.send(numeros);
});

router.post('/ex6', function (req, res) {
    const { valores } = req.body;

    if (!Array.isArray(valores) || valores.length !== 10) {
        return res.status(400).json({ error: 'Coloque 10 números!' });
    }
    const soma = valores.reduce((somaTotal, valorTotal) => somaTotal + valorTotal, 0);

    res.json({ soma });
});

router.post('/ex7', function (req, res) {

    const { n } = req.body;

    const nPares = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            nPares.push(i);
        }
    }
    res.json({ nPares });
});

router.post('/ex8', function (req, res) {
    const { valores } = req.body;

    let valoresNegativos = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            valoresNegativos++;
        }
    }
    res.json({ valoresNegativos });
});

router.post('/ex9', function (req, res) {

    const { valores } = req.body;

    const valoresNegativos = valores.filter(valor => valor < 0);

    res.json({ valoresNegativos });
});

router.post('/ex10', function (req, res) {
    const { valores } = req.body;

    let noIntervalo = 0;
    let foraDoIntervalo = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20) {
            noIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }

    res.json({ noIntervalo, foraDoIntervalo });
});

router.post('/ex11', function (req, res) {
    const { mediaAri } = req.body;

    const soma = mediaAri.reduce((somaMedia, valorMedio) => somaMedia + valorMedio, 0);
    const media = soma / mediaAri.length;

    res.json({ media });
});

router.post('/ex12', function (req, res) {
    const { mediaAri } = req.body;

    const soma = mediaAri.reduce((somaMedia, valorMedio) => somaMedia + valorMedio, 0);
    const media = soma / mediaAri.length;

    res.json({ media });
});

router.post('/ex13', function (req, res) {
    const { valor } = req.body;
    const nTriplo = [];

    for (let i = 0; i < valor.length; i++) {
        nTriplo.push(valor[i] * 3);
    }
    res.json({ nTriplo });
});

router.post('/ex14', function (req, res) {
    const { numero } = req.body;
    const nDobro = [];

    for (let i = 0; i < numero.length; i++) {
        nDobro.push(numero[i] * 2);
    }
    res.json({ nDobro });
});

router.post('/ex15', function (req, res) {
    const { numeros } = req.body;
    let somaValor = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 40) {
            somaValor += numeros[i];
        }
    }
    res.json({ somaValor });
});

router.post('/ex16', function (req, res) {
    const { estoqueDeMercadorias, valoresDasMercadorias } = req.body;
    let EstoqueGeral = 0;

    for (let i = 0; i < valoresDasMercadorias.length; i++) {
        EstoqueGeral += valoresDasMercadorias[i];
    }

    const mediaValores = EstoqueGeral / estoqueDeMercadorias;

    res.json({ EstoqueGeral, mediaValores });
});

router.post('/ex17', function (req, res) {
    const { start, final } = req.body;
    let somar = 0;
    const Impar = [];

    for (let i = start; i <= final; i++) {
        if (i % 2 !== 0) {
            Impar.push(i);
            somar += i;
        }
    }

    res.json({ Impar, somar });
});

router.post('/ex18', function (req, res) {
    const { valor } = req.body;

    let maiorLido = valor[0];
    let menorLido = valor[0];
    let somar = 0;

    for (let i = 0; i < valor.length; i++) {
        if (valor[i] > maiorLido) {
            maiorLido = valor[i];
        }
        if (valor[i] < menorLido) {
            menorLido = valor[i];
        }
        somar += valor[i];
    }

    const media = somar / valor.length;

    res.json({ maiorLido, menorLido, media });
});

router.post('/ex19', function (req, res) {
    const { infoAluno } = req.body;

    let AlunosPorCurso = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };

    let AlunosIdade20a25 = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };
    
    let mediaIdadeCurso = {
        'Sistemas de Informação': 0,
        'Ciência da Computação': 0,
        'Engenharia Civil': 0
    };

    for (let aluno of infoAluno) {
        AlunosPorCurso[aluno.curso]++;
        mediaIdadeCurso[aluno.curso] += aluno.idade;

        if (aluno.idade >= 20 && aluno.idade <= 25) {
            AlunosIdade20a25[aluno.curso]++;
        }
    }

    let mediaIdadePorCurso = {};
    for (let curso in AlunosPorCurso) {
        mediaIdadePorCurso[curso] = mediaIdadeCurso[curso] / AlunosPorCurso[curso];
    }

    let menorMediaIdadeCurso = Object.keys(mediaIdadePorCurso)[0];
    for (let curso in mediaIdadePorCurso) {
        if (mediaIdadePorCurso[curso] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = curso;
        }
    }

    res.json({AlunosPorCurso, AlunosIdade20a25, menorMediaIdadeCurso});
});

router.get('/ex20', function (req, res) {
    let tabuadas = {};

    for (let i = 1; i <= 10; i++) {
        let tabuada = [];
        for (let j = 1; j <= 10; j++) {
            tabuada.push(i * j);
        }
        tabuadas[i] = tabuada;
    }

    res.json(tabuadas);
});

router.post('/ex21', function (req, res) {
    const { dataFolha } = req.body;

    let totalNota10 = 0;
    let mediaIdades = 0;
    let totalPessoas = dataFolha.length;
    let notasMenores5 = 0;
    let pessoaMaisVelha = null;
    let maiorIdade = -1;

    for (let pessoa of dataFolha) {
        if (pessoa.nota === 10) {
            totalNota10++;
        }

        mediaIdades += pessoa.idade;

        if (pessoa.nota <= 5) {
            notasMenores5++;
        }

        if (pessoa.idade > maiorIdade) {
            pessoaMaisVelha = pessoa.nome;
            maiorIdade = pessoa.idade;
        }
    }

    let mediaIdade = mediaIdades / totalPessoas;

    let percentagemNotas5ouMenos = (notasMenores5 / totalPessoas) * 100;

    res.json({
        totalNota10, mediaIdade, percentagemNotas5ouMenos, pessoaMaisVelha });
});

router.post('/ex22', function (req, res) {
    const { produtos } = req.body;

    let maiorPrecoLido = -Infinity;
    let somaDosPrecos = 0;

    for (let produto of produtos) {
        if (produto.preco > maiorPrecoLido) {
            maiorPrecoLido = produto.preco;
        }
        somaDosPrecos += produto.preco;
    }

    const mediaPrecos = somaDosPrecos / produtos.length;

    res.json({ maiorPrecoLido, mediaPrecos });
});


module.exports = router