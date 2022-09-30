const express = require('express');
const router = express.Router();
const collaboratorsService = require('../service/collaboratorsService');

// router.get('/', (req,res) => {
//     console.log('requisição pra barra')
//     res.status(200).json({msg: 'Bem vindo a API'});
// })

router.get('/collaborators', async (req,res) => {
    let collaborators = await collaboratorsService.getAll();
    console.log(collaborators)
    res.end(collaborators[0].img);

});

router.post('/addcollaborators', async (req,res) => {
    let nome = req.body.nome;
    let cargo = req.body.cargo;
    let { name, data }  = req.files.avatar;
    console.log(name, data);

    try{
        let newCollaborator = await collaboratorsService.post(nome, cargo, name, data);
        res.status(200).send(newCollaborator);
    }catch(e){
        res.status(404).send('Erro ao add um novo colaborador')
    }

});



// router.post('/login', async (req,res) => {
//     let username = req.body.username;
//     let password = req.body.password;
//     try{
//         let user = await usersService.login(username, password);
//         res.status(200).send(user)
//     }catch(e){
//         res.status(404).send('Senha e/ou usuário inválidos')
//     }

    
// });

module.exports = router;