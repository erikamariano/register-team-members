<template>
  <div class="team mx-4">
    <h2 class="text-center mt-10">
        <v-icon large @click="$router.push('/home')">mdi-chevron-left</v-icon>
        Editar colaborador
    </h2>
    <v-flex xs12 sm8 md6 lg6 class="mx-auto mt-10">
      <form @submit.prevent="submit">

        <v-text-field outlined v-model="nome" label="Nome" :rules="inputRules"></v-text-field>

        <v-text-field outlined v-model="cargo" label="Cargo" :rules="inputRules"></v-text-field>

        <v-select outlined :items="items" v-model="avatar" label="Avatar" :rules="inputRules"></v-select>      

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
      avatar: null,
      items: [
            'Avatar 1',
            'Avatar 2',
            'Avatar 3',
            'Avatar 4',
            'Avatar 5',
            'Avatar 6'
      ],
      inputRules: [
        v => !!v || 'Campo obrigatório'
      ]
    }
  },
  methods: {
    showAlertConfirm(){
      const swal = new SweetAlert2({
        html: `<h3>Colaborador editado com sucesso</h3>`
      })
    },

    createPathAvatar(avatar){
      let path = `/avatar/`

      switch(avatar){
        case 'Avatar 1':
          path += 'avatar-1.jpg';
          break;

        case 'Avatar 2':
          path += 'avatar-2.jpg';
          break;

        case 'Avatar 3':
          path += 'avatar-3.jpg';
          break;

        case 'Avatar 4':
          path += 'avatar-4.jpg';
          break;

        case 'Avatar 5':
          path += 'avatar-5.jpeg';
          break;
        
          case 'Avatar 6':
          path += 'avatar-6.jpeg';
          break;
        
        default:
          path += 'avatar-1.jpg';
          break;
      }
      return path;
    },

    async editColaborador(){
      let nome = this.nome
      let cargo = this.cargo
      let avatar = await this.createPathAvatar(this.avatar);

      if(nome != null && cargo != null && avatar != null){
        await this.$axios.$put(`api/team/editcollaborator/${this.id}`, 
          { 
            "nome": nome,
            "cargo": cargo,
            "avatar": avatar
          }
        )
        await this.showAlertConfirm();
        this.$router.push('/home');
      } else{
        alert('Preencha os campos obrigatórios')
      }

      
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