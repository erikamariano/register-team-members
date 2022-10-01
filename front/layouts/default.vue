<template>
  <v-app>
    <!-- Menu superior -->
    <v-app-bar color="#d3cade" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>     
      <v-btn class="grey lighten-4 black--text" small @click="logout()">Sair</v-btn>
    </v-app-bar>

    <!-- conteúdo -->
    <v-main class="grey lighten-4">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- footer -->
    <v-footer
      :absolute="!fixed"
      app
      color="#90869c"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      title: 'Vuetify.js'
    }
  },
  methods: {
    logout(){
      console.log('deslogando')
      this.$router.push('/')
      this.$store.dispatch('Auth/changeLogin', false)
    }
  }
}
</script>
