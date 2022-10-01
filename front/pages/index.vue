<template>
<div class="login-card mt-15 pt-10 pb-10 mx-auto">
  <v-flex xs12 sm8 md6 lg6 class="mx-auto">

    <form>

      <h2 class="text-left mt-10">
        <v-icon large>mdi-account</v-icon>
        Login
      </h2>
      <br>

      <v-text-field outlined filled required v-model="username" label="username"></v-text-field>

      <v-text-field outlined filled required v-model="password" label="password" 
        :type="ver ? 'text' : 'password'" 
        :append-icon="ver ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="ver = !ver"
      ></v-text-field>
            
      <v-btn class="mr-4 mt-5 grey" @click="login()">
        Entrar
      </v-btn>

    </form>

  </v-flex>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'start',
  data(){
    return{
      ver: false,
      username: null,
      password: null
    }
  },
  methods: {
    async login(){
      let username = this.username
      let password = this.password

      try{
        await this.$axios.$post('/api/login', {
          "username": username, "password": password
        })
        
        this.$store.dispatch('Auth/changeLogin', true)

        await this.$router.push('/home')
      } catch(e){
        alert('Usuário e/ou senha inválidos')
      }

      
    }
  },

}
</script>

<style>
  .login-card{
    width: 60%;
    background-color: rgb(219, 206, 221);
    border-radius: 5px;
  }
</style>