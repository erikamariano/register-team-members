const database = require('./databaseConnection');

module.exports = {
    
    async getCollaborators(){
        try{
            console.log('procurando no banco')
            return database.query('SELECT * FROM collaborator');
        } catch(e){
            console.log('erro ao buscar colaboradores')
        }
        
    },

    async addCollaborator(nome, cargo, name, data){
        let statement = `INSERT INTO collaborator(nome, cargo, avatar_file, img) VALUES ($1, $2, $3, $4) returning *`
        try{
            return await database.one(statement, [nome, cargo, name, data]);
        } catch(e){
            console.log('There was an error adding the collab to the DB. = ', e);
        }
    }
}
