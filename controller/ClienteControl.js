const express = require('express');
const Cliente = require('../model/Cliente');

module.exports = class ClienteControl {

    async cliente_create_control(request, response) {
        var cliente = new Cliente();
        cliente.nome_cliente = request.body.nome_cliente;
        cliente.pedido_cliente = request.body.pedido_cliente;
        const isCreated = await cliente.create();

        const objResposta = {
            cod : isCreated ? 1 : 2,
            status : isCreated,
            msg : isCreated ? 'Cliente criado com sucesso!' : 'Erro ao criar cliente'
        };
        response.status(200).send(objResposta);
    }

    async cliente_delete_control(request, response) {
        var cliente = new Cliente();
        cliente.id_cliente = request.params.id;
        const isDeleted = await cliente.delete();

        const objResposta = {
            cod : isDeleted ? 1 : 2,
            status : isDeleted,
            msg : isDeleted ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente'
        };
        response.status(200).send(objResposta);
    }

    async cliente_update_control(request, response) {
        var cliente = new Cliente();
        cliente.id_cliente = request.params.id;
        cliente.nome_cliente = request.body.nome_cliente;
        cliente.pedido_cliente = request.body.pedido_cliente;
        const isUpdated = await cliente.update();

        const objResposta = {
            cod : isUpdated ? 1 : 2,
            status : isUpdated,
            msg : isUpdated ? 'Cliente atualizado com sucesso!' : 'Erro ao atualizar cliente'
        };
        response.status(200).send(objResposta);

    }

    async cliente_read_all_control(request, response) {
        var cliente = new Cliente();
        const resultado = await cliente.readAll();
        
        const objResposta = {
            cod : resultado == [] ? 2 : 1,
            status : true,
            msg : "Executado com sucesso",
            clientes : resultado
        };
        response.status(200).send(objResposta);
    }

    async cliente_read_by_id_control(request, response) {
        var cliente = new Cliente();
        cliente.id_cliente = request.params.id;
        const resultado = await cliente.readById();

        const objResposta = {
            cod : resultado == null ? 2 : 1,
            status : true,
            msg : resultado ? 'Cliente encontrado' : 'Cliente não encontrado',
            cliente : resultado
        };
        response.status(200).send(objResposta);
    }
}