const database = require('./databaseConnection');

module.exports = {
    
    async getUsers(){
        try{
            return database.query('SELECT * FROM users');
        } catch(e){
            console.log('erro na parte de data')
        }
        
    },

    async getUserLogin(username){
        try{
            let statement = 'SELECT * FROM users WHERE username = $1'
            return await database.query(statement, [username]);
        } catch(e){
            console.log('Error while searching in the DB. = ', e)
        }
    },

    async postUser(id, username, hashedPwd){
        let statement = `INSERT INTO users(id, username, password) VALUES ($1, $2, $3) returning *`
        try{
            return await database.one(statement, [id, username, hashedPwd]);
        } catch(e){
            console.log('There was an error adding the user to the DB. = ', e);
        }
    }
}
