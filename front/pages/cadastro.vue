<template>
  <div class="login-card mt-15 pt-10 pb-3 mx-auto">
  <v-flex xs12 sm8 md6 lg6 class="mx-auto">

    <form class="formulario">

      <h2 class="text-left mt-10">
        <v-icon large>mdi-account</v-icon>
        Cadastro
      </h2>
      <br>

      <v-text-field outlined filled required v-model="username" label="username"></v-text-field>

      <v-text-field outlined filled required v-model="password" label="password" 
        :type="ver ? 'text' : 'password'" 
        :append-icon="ver ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="ver = !ver"
      ></v-text-field>
            
      <v-btn class="mr-4 mt-5 grey" @click="cadastrar()">
        Salvar
      </v-btn>

    </form>

  </v-flex>
</div>
</template>

<script>
export default {
  name: 'Cadastro',
  layout: 'auth',
  data(){
    return{
      ver: false,
      username: null,
      password: null
    }
  },
  methods: {
    async cadastrar(){
      let username = this.username
      let password = this.password

      try{
        await this.$axios.$post('/api/register', {
          "username": username, "password": password
        })

        this.$router.push('/home')
      } catch(e){
        alert('Usuário já cadastrado')
      }

      
    }
  }
}
</script>

<style>
  .login-card{
    margin: auto;
    margin-top: 12%;
    background-color: rgb(219, 206, 221);
    border-radius: 5px;
    padding: 50px;
  }
</style>
