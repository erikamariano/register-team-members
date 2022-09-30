<template>
  <div class="team mx-4">
    <v-layout row class="mt-3">
      <h1 class="subheading grey--text">Time</h1>
      <v-spacer></v-spacer>
      <v-btn small color="grey" class="mt-3" @click="$router.push('/create')">Adicionar colaborador</v-btn>
    </v-layout>

    <v-container class="my-5">
      <v-layout row> <!-- para ficarem em uma linha só -->
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3">
            <!-- <v-img
              height="200"
              :src="person.img"
            ></v-img> -->

            <v-card-title></v-card-title>
            <v-card-subtitle>{{ person.img }}</v-card-subtitle>

            <v-card-actions class="justify-left">
              <v-btn text color="grey">
                <v-icon>mdi-delete</v-icon>                 
              </v-btn>

              <v-btn text color="grey" >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
        team: []
      }
  },
  methods: {
    async fetch(){
      try{
        let team = await this.$axios.$get('/api/team/collaborators');
        console.log(team)
        // this.team = team
        // console.log(this.team)
      } catch(err){
        console.log('houve um erro = ', err)
      }

      //return team
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
    this.fetch()
  }

}




</script>
