const database = require('./databaseConnection');

module.exports = {
    
    async getCollaborators(){
        try{
            console.log('procurando no banco')
            let resp =  await database.query('SELECT * FROM collaborator');
            return JSON.stringify(resp)
        } catch(e){
            console.log('There was an error searching for collaborators.', e);
        }
        
    },

    async addCollaborator(nome, cargo, name, data){
        let statement = `INSERT INTO collaborator(nome, cargo, avatar_file, img) VALUES ($1, $2, $3, $4) returning *`
        try{
            return await database.one(statement, [nome, cargo, name, data]);
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

    async editCollaborator(id, nome, cargo){
        console.log('no edit data = ', id, nome, cargo)

        let statement = `UPDATE collaborator SET nome = $1, cargo = $2 WHERE id = $3 returning *`
        try{
            return await  database.one(statement, [nome, cargo, id]);
        }catch(e){
            console.log('There was an error editing the collaborator.', e);
            throw Error
        }
    }
}
