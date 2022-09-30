<template>
  <div class="black--text">

  <div id="content">
  <v-row>
    <v-col cols="12" sm="8" md="6">
      <v-card color="#9e9b9b">
        <v-card-title class="headline">
          Login
        </v-card-title>
        
        <v-card-text>
         <v-text-field label="username" outlined filled v-model="username"></v-text-field>
         <v-text-field label="password" outlined filled name="password"
         v-model="password"
         :type="ver ? 'text' : 'password'" 
         :append-icon="ver ? 'mdi-eye' : 'mdi-eye-off'"
         @click:append="ver = !ver"
         ></v-text-field>
        

        </v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="#90869c"
            @click="login()"
          >
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </div>
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
