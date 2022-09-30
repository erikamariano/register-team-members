const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');

router.get('/', (req,res) => {
    console.log('requisição pra barra')
    res.status(200).json({msg: 'Bem vindo a API'});
})

router.get('/users', async (req,res) => {
    let users = await usersService.getAll();
    res.json(users);

});

router.post('/register', async (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    try{
        let newUser = await usersService.post(username, password);
        res.status(200).send(newUser);
    }catch(e){
        res.status(404).send('Usuário já existente')
    }

});



router.post('/login', async (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    try{
        let user = await usersService.login(username, password);
        res.status(200).send(user)
    }catch(e){
        res.status(404).send('Senha e/ou usuário inválidos')
    }

    
});

module.exports = router;