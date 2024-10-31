const express = require('express');
const EmpresaControl = require('../controller/EmpresaControl');
//const EmpresaMiddleware = require('../middleware/EmpresaMiddleware');

module.exports = class EmpresaRouter {
    constructor() {
        this._router = express.Router();
        this._empresaControl = new EmpresaControl();
        //this._clienteMiddleware = new ClienteMiddleware();
    }

    criarRotasEmpresa() {
        this._router.get('/',
            //chamar funcao readAll()
            this._empresaControl.empresa_read_all_control
        );

        this._router.get('/:id',
            //chamar funcao readById
            this._empresaControl.empresa_read_by_id_control
        );

        this._router.post('/',
            //fazer verificacao usando middleware *quantas forem necessarias
            //this._clienteMiddleware.

            //chamar funcao create
            this._empresaControl.empresa_create_control
        );

        this._router.delete('/:id',
            //chamar funcao delete
            this._empresaControl.empresa_delete_control
        );

        this._router.put('/:id',
            //chamar funcao update
            this._empresaControl.empresa_update_control
        );

        return this._router;
    }
}