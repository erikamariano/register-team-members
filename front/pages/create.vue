<template>
    <div class="team mx-4">
    <h2 class="text-center mt-10">
        <v-icon large @click="$router.push('/home')">mdi-chevron-left</v-icon>
        Adicionar colaborador
    </h2>
    <v-flex xs12 sm8 md6 lg6 class="mx-auto mt-10">
    <form @submit.prevent="submit" ref="form">

        <v-text-field
        outlined
          v-model="nome"
          label="Nome"
          required
          ref="inputField"
        ></v-text-field>


        <v-text-field
        outlined
          v-model="cargo"
          label="Cargo"
          required
          ref="inputField"
        ></v-text-field>

        <!-- <v-file-input
            v-model="avatar"
            accept="image/*"
            label="Avatar"
            prepend-icon="mdi-camera"
        ></v-file-input> -->
        
        <div id="picture" class="pt-3 pb-3">
          <label for="pic" class="grey--text mx-2">Avatar</label><br>
          <input class="mt-2 mx-2" type="file" name="pic" ref="inputField" @change="onFileChange" />
        </div>
        


      <br>
      <v-btn class="mr-4 mt-5 grey" @click="addColaborador()">
        Salvar
      </v-btn>

    </form>

</v-flex>


    </div>
  </template>
  
  <script>
  export default {
    name: 'Create',
    data(){
      return{
            nome: null,
            cargo: null,
            avatar: null
        }
    },
    methods: {
        onFileChange(e){
            const selectedFile = e.target.files[0]; // accessando arquivo
            this.avatar = selectedFile;
        },

        async addColaborador(){
            let nome = this.nome
            let cargo = this.cargo

            const formData = new FormData();
            formData.append("nome", nome)
            formData.append("cargo", cargo)
            formData.append("avatar", this.avatar);

            try{
              await this.$axios.$post('/api/team/addcollaborators', formData);

              alert("Colaborador adicionado com sucesso!")
              this.$refs.form.reset()
              
            } catch(err) {
                console.log(err);

                alert('Houve um erro ao salvar o colaborador. Tente novamente.', err)
            };
        }
    },
    computed: {
      estaLogado(){
        return this.$store.getters['Auth/estaLogado']
      }
    },
    created(){
      if(!this.estaLogado){
        this.$router.push('/')
      }
    }
  
  }
  
  
  
  
  </script>
  
<style>
  #picture{
    border: 1px solid rgb(170, 167, 167);
    padding: 1px;
    border-radius: 5px;
  }
</style>