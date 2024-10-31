const express = require('express');
const ClienteRouter = require('./router/ClienteRouter');
const EmpresaRouter = require('./router/EmpresaRouter');
const app = express();
const porta = 2007;

app.use(express.json());
const clienteRoteador = new ClienteRouter();
const empresaRoteador = new EmpresaRouter();

app.use('/clientes',
    clienteRoteador.criarRotasCliente()
);

app.use('/empresas',
    empresaRoteador.criarRotasEmpresa()
)

app.listen(porta, () => {
    console.log(`API rodando no endereço: http://localhost:${porta}/`);
});