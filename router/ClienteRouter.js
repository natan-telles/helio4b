const express = require('express');
const ClienteControl = require('../controller/ClienteControl');

module.exports = class ClienteRouter {
    constructor() {
        this._router = express.Router();
        this._clienteControl = new ClienteControl();
    }

    criarRotasCliente() {
        this._router.get('/',
            //chamar funcao readAll()
            this._clienteControl.cliente_read_all_control
        );

        this._router.get('/:id',
            //chamar funcao readById
            this._clienteControl.cliente_read_by_id_control
        );

        this._router.post('/',
            //fazer verificacao usando middleware *quantas forem necessarias
            //chamar funcao create
            this._clienteControl.cliente_create_control
        );

        this._router.delete('/:id',
            //chamar funcao delete
            this._clienteControl.cliente_delete_control
        );

        this._router.put('/:id',
            //chamar funcao update
            this._clienteControl.cliente_update_control
        );

        return this._router;
    }
}