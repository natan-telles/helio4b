const express = require('express');
const EstagiarioControl = require('../controller/EstagiarioControl')

module.exports = class EstagiarioRouter {
    constructor() {
        this._router = express.Router();
        this._estagiarioControl = new EstagiarioControl();
    }

    criarRotasEstagiario() {
        this._router.get('/',
            this._estagiarioControl.estagiario_read_all_control
        );

        this._router.get('/:id',
            this._estagiarioControl.estagiario_read_by_id_control
        );

        this._router.post('/',
            this._estagiarioControl.estagiario_create_control
        );

        this._router.delete('/:id',
            this._estagiarioControl.estagiario_delete_control
        );

        this._router.put('/:id',
            this._estagiarioControl.estagiario_update_control
        );

        return this._router;
    }
}