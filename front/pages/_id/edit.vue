<template>
    <div class="team mx-4">
    <h2 class="text-center mt-10">
        <v-icon large @click="$router.push('/home')">mdi-chevron-left</v-icon>
        Editar colaborador
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
        
        <div id="picture" class="pt-3 pb-3">
          <label for="pic" class="grey--text mx-2">Avatar</label><br>
          <input class="mt-2 mx-2" type="file" name="pic" ref="inputField" @change="" />
        </div>
        


      <br>
      <v-btn class="mr-4 mt-5 grey" @click="editColaborador()">
        Salvar
      </v-btn>

    </form>

  </v-flex>


  </div>
</template>
  
<script>
import SweetAlert2 from "sweetalert2";

export default {
  name: 'Create',
  data(){
    return{
      nome: null,
      cargo: null,
      //avatar: null
    }
  },
  methods: {
    showAlertConfirm(){
      const swal = new SweetAlert2({
        html: `<h3>Colaborador editado com sucesso</h3>`
      })
    },

    async editColaborador(){
      await this.$axios.$put(`api/team/editcollaborator/${this.id}`, 
        { 
          "nome": this.nome,
          "cargo": this.cargo
        }
      )
      await this.showAlertConfirm();
      this.$router.push('/home');
    }
  },
  computed: {
    estaLogado(){
      return this.$store.getters['Auth/estaLogado']
    },

    id(){ 
      return this.$route.params.id 
    }
  },
  created(){
    if(!this.estaLogado){
      this.$router.push('/');
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