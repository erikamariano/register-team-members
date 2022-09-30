<template>
  <v-app>
    <!-- Menu superior -->
    <v-app-bar color="#d3cade"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn class="grey lighten-4 black--text" small @click="$router.push('/cadastro')">Cadastrar</v-btn>
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
  name: 'Start',
  data () {
    return {
      drawer: false,
      fixed: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
