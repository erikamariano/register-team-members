const database = require('./databaseConnection');

module.exports = {
    
    async getCollaborators(){
        try{
            let resp =  await database.query('SELECT * FROM collaborator');
            return JSON.stringify(resp)
        } catch(e){
            console.log('There was an error searching for collaborators.', e);
        }
        
    },

    async addCollaborator(nome, cargo, avatar){
        let statement = `INSERT INTO collaborator(nome, cargo, avatar) VALUES ($1, $2, $3) returning *`
        try{
            return await database.one(statement, [nome, cargo, avatar]);
        } catch(e){
            console.log('There was an error adding the collab to the DB. = ', e);
            throw Error
        }
    },

    async deleteCollaborator(id){
        let statement = `DELETE FROM collaborator WHERE id = $1 returning *`
        try{
            return await database.one(statement, id);
        }catch(e){
            console.log('There was an error deleting the collaborator.', e);
            throw Error
        }
    },

    async editCollaborator(id, nome, cargo, avatar){
        let statement = `UPDATE collaborator SET nome = $1, cargo = $2, avatar = $3 WHERE id = $4 returning *`
        try{
            return await  database.one(statement, [nome, cargo, avatar, id]);
        }catch(e){
            console.log('There was an error editing the collaborator.', e);
            throw Error
        }
    }
}
