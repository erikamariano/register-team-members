const users = require('../data/usersData');
const bcrypt = require('bcrypt');

module.exports = {
    async getAll(){
        try{
            return users.getUsers();
        } catch(e){
            console.log('Error searching for users');
            throw Error
        }
        
    },

    async login(username, password){
        try{
            let user = await users.getUserLogin(username);
            if(!user) throw Error
            user = user[0];

            let comparacao = await bcrypt.compareSync(password, user.password);
            if (!comparacao) throw Error
            return user;

        } catch(e){
            console.log('Invalid username or password');
            throw Error
        }
    },

    async getNextId(){
        let users = await this.getAll();
        let nextId = users.length + 1
        return nextId;
    },

    async post(username, password){
        try{
            let user = await users.getUserLogin(username);
            if(user.length >= 1) throw Error

            let hashedPwd = await bcrypt.hash(password, 10);
            let id = await this.getNextId();

            return users.postUser(id, username, hashedPwd);

        }catch(e){
            console.log('Error creating new user');
            throw Error
        }
    }
}