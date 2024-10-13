const express = require('express');
const ClienteRouter = require('./router/ClienteRouter');
const app = express();
const porta = 2007;

app.use(express.json());
const clienteRoteador = new ClienteRouter();

app.use('/clientes',
    clienteRoteador.criarRotasCliente()
);

app.listen(porta, () => {
    console.log(`API rodando no endereço: http://localhost:${porta}/`);
});