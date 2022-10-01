<template>
    <div class="team mx-4">
    <h2 class="text-center mt-10">
        <v-icon large @click="$router.push('/home')">mdi-chevron-left</v-icon>
        Adicionar colaborador
    </h2>
    <br>
    <v-flex xs12 sm8 md6 lg6 class="mx-auto ">
    <form @submit.prevent="submit" ref="form">

        <v-text-field outlined v-model="nome" label="Nome" required></v-text-field>

        <v-text-field outlined v-model="cargo" label="Cargo" required></v-text-field>

        <v-select :items="items" v-model="avatar" label="Outlined style" outlined></v-select>

        <!-- <v-file-input
            v-model="avatar"
            accept="image/*"
            label="Avatar"
            prepend-icon="mdi-camera"
        ></v-file-input> -->
        
        <!-- <div id="picture" class="pt-3 pb-3">
          <label for="pic" class="grey--text mx-2">Avatar</label><br>
          <input class="mt-2 mx-2" type="file" name="pic" ref="inputField" @change="onFileChange" />
        </div> -->
        


      <br>
      <v-btn class="mr-4 mt-5 grey" @click="addColaborador()">
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
            'avatar 1',
            'avatar 2',
            'avatar 3',
            'avatar 4',
            'avatar 5',
            'avatar 6',
          ]
      }
  },
  methods: {
    onFileChange(e){
      const selectedFile = e.target.files[0]; // accessando arquivo
      this.avatar = selectedFile;
    },

    showAlertConfirm(){
      const swal = new SweetAlert2({
        html: `<h3>Colaborador adicionado com sucesso</h3>`
      })
    },

    createPathAvatar(avatar){
      let path = `http://localhost:3000/avatar/`

      switch(avatar){
        case 'avatar 1':
          path =+ 'avatar-1.jpg';
          break;

        case 'avatar 2':
          path =+ 'avatar-2.jpg';
          break;

        case 'avatar 3':
          path =+ 'avatar-3.jpg';
          break;

        case 'avatar 4':
          path =+ 'avatar-4.jpg';
          break;

        case 'avatar 5':
          path =+ 'avatar-5.jpeg';
          break;
        
          case 'avatar 6':
          path =+ 'avatar-6.jpeg';
          break;
        
        default:
          path =+ 'avatar-1.jpg';
      }
    },

    async addColaborador(){
      let nome = this.nome
      let cargo = this.cargo
      let avatar = this.avatar
      console.log(nome)
      console.log(cargo)
      console.log(avatar)

      // const formData = new FormData();
      // formData.append("nome", nome);
      // formData.append("cargo", cargo);
      // formData.append("avatar", avatar);

      // try{
      //   await this.$axios.$post('/api/team/addcollaborators', formData);
      //   this.showAlertConfirm();
      //   this.$refs.form.reset();        
      // }catch(err) {
      //   console.log(err);
      //   alert('Houve um erro ao salvar o colaborador. Tente novamente.', err);
      // };
    }

    // async addColaborador(){
    //   let nome = this.nome
    //   let cargo = this.cargo

    //   const formData = new FormData();
    //   formData.append("nome", nome);
    //   formData.append("cargo", cargo);
    //   formData.append("avatar", this.avatar);

    //   try{
    //     await this.$axios.$post('/api/team/addcollaborators', formData);

    //     this.showAlertConfirm();
    //     this.$refs.form.reset();
        
    //   } catch(err) {
    //       console.log(err);

    //       alert('Houve um erro ao salvar o colaborador. Tente novamente.', err);
    //   };
    // }
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