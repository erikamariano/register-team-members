const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');

router.get('/', (req,res) => {
    console.log('Health Check')
    res.status(200).json({msg: 'Bem vindo à API'});
})

router.get('/users', async (req,res) => {
    let users = await usersService.getAll();
    res.json(users);
});

router.post('/register', async (req,res) => {
    try{
        let username = req.body.username;
        let password = req.body.password;
        let newUser = await usersService.post(username, password);
        res.status(200).send(newUser);
    }catch(e){
        res.status(404).send('Usuário já existente')
    }
});

router.post('/login', async (req,res) => {
    try{
        let username = req.body.username;
        let password = req.body.password;
        let user = await usersService.login(username, password);
        res.status(200).send(user)
    }catch(e){
        res.status(404).send('Senha e/ou usuário inválidos')
    }    
});

module.exports = router;