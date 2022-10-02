const express = require('express');
const router = express.Router();
const collaboratorsService = require('../service/collaboratorsService');

router.get('/collaborators', async (req,res) => {
    try{
        let collaborators = await collaboratorsService.getAll();
        let collabs = JSON.parse(collaborators)
        res.send(collabs);
    }catch(err){
        res.status(404).send('Erro ao buscar colaboradores');
    }
});

router.post('/addcollaborators', async (req,res) => {
    try{
        let nome = req.body.nome;
        let cargo = req.body.cargo;
        let avatar = req.body.avatar;

        let response = await collaboratorsService.post(nome, cargo, avatar);
        res.status(200).send(response);
    }catch(err){
        res.status(404).send('Erro ao add um novo colaborador = ', err);
    }

});

router.delete('/deletecollaborator/:id', async (req,res) => {
    try{ 
        let id = req.params.id;      
        let response = await collaboratorsService.delete(id);
        res.status(200).send(response);
    }catch(err){
        console.log('Erro na rota de deletar colaborador', err);
        res.status(404).send('Erro ao deletar colaborador');
    }
    
})

router.put('/editcollaborator/:id', async (req, res) => {
    try{
        let id = req.params.id
        let nome = req.body.nome;
        let cargo = req.body.cargo;
        let avatar = req.body.avatar
        let response = await collaboratorsService.put(id, nome, cargo, avatar);
        res.status(200).send(response)
    }catch(err){
        console.log('Erro na rota de editar colaborador', err);
        res.status(404).send('Erro ao editar colaborador');
    }
})

module.exports = router;