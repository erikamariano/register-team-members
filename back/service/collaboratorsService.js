const collaborators = require('../data/collaboratorsData');

module.exports = {
    async getAll(){
        console.log('no get all')
        try{
            return collaborators.getCollaborators();
        } catch(e){
            console.log('Error searching for collaborators');
            throw Error
        }
        
    },

    async post(nome, cargo, name, data){
        try{
            return collaborators.addCollaborator(nome, cargo, name, data)

        }catch(e){
            console.log('Error creating new collab');
            throw Error
        }
    }

}