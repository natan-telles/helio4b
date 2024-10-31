const express = require('express');
const Empresa = require('../model/Empresa');

module.exports = class EmpresaControl {

    async empresa_create_control(request, response) {
        var empresa = new Empresa();
        empresa.id_cliente_empresa = request.body.id_cliente_empresa;
        empresa.nome_empresa = request.body.nome_empresa;
        empresa.cnpj = request.body.cnpj;
        const isCreated = await empresa.create();

        const objResposta = {
            cod : isCreated ? 1 : 2,
            status : isCreated,
            msg : isCreated ? 'Empresa criada com sucesso!' : 'Erro ao criar empresa'
        };
        response.status(200).send(objResposta);
    }

    async empresa_delete_control(request, response) {
        var empresa = new Empresa();
        empresa.id_empresa = request.params.id;
        const isDeleted = await empresa.delete();

        const objResposta = {
            cod : isDeleted ? 1 : 2,
            status : isDeleted,
            msg : isDeleted ? 'Empresa excluída com sucesso!' : 'Erro ao excluir empresa'
        };
        response.status(200).send(objResposta);
    }

    async empresa_update_control(request, response) {
        var empresa = new Empresa();
        empresa.id_empresa = request.params.id;
        empresa.id_cliente_empresa = request.body.id_cliente_empresa;
        empresa.nome_empresa = request.body.nome_empresa;
        empresa.cnpj = request.body.cnpj;
        const isUpdated = await empresa.update();

        const objResposta = {
            cod : isUpdated ? 1 : 2,
            status : isUpdated,
            msg : isUpdated ? 'Empresa atualizada com sucesso!' : 'Erro ao atualizar empresa'
        };
        response.status(200).send(objResposta);

    }

    async empresa_read_all_control(request, response) {
        var empresa = new Empresa();
        const resultado = await empresa.readAll();
        
        const objResposta = {
            cod : resultado == [] ? 2 : 1,
            status : true,
            msg : "Executado com sucesso",
            empresa : resultado
        };
        response.status(200).send(objResposta);
    }

    async empresa_read_by_id_control(request, response) {
        var empresa = new Empresa();
        empresa.id_empresa = request.params.id;
        const resultado = await empresa.readById();

        const objResposta = {
            cod : resultado == false ? 2 : 1,
            status : resultado == false ? false : true,
            msg : resultado == false ? 'Empresa não encontrada' : 'Empresa encontrada',
            empresa : resultado
        };
        response.status(200).send(objResposta);
    }
}