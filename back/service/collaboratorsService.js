const collaborators = require('../data/collaboratorsData');

module.exports = {
    async getAll(){
        try{
            return collaborators.getCollaborators();
        } catch(e){
            console.log('Error searching for collaborators');
            throw Error
        }
        
    },

    async post(nome, cargo, avatar){
        try{
            return collaborators.addCollaborator(nome, cargo, avatar);
        }catch(e){
            console.log('Error creating new collaborator');
            throw Error
        }
    },

    async delete(id){
        try{
            return collaborators.deleteCollaborator(id);
        } catch(e){
            console.log('Error deleting collaborator');
            throw Error
        }
    },

    async put(id, nome, cargo, avatar){
        try{
            return collaborators.editCollaborator(id, nome, cargo, avatar);
        }catch(e){
            console.log('Error editing collaborator');
            throw Error
        }
    }

}