const express = require('express');
const app = express();
const conn = require('./db/conn');

// Middleware de Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Conexão com o Banco de Dados
conn();

// Importar e utilizar o roteador
const routes = require('./routes/routes');
app.use('/', routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server UP on port ${PORT}`);
});
