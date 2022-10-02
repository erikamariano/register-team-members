<template>
  <div class="team mx-4">
    <v-layout row class="mt-3">
      <h1 class="subheading grey--text">Time</h1>
      <v-spacer></v-spacer>
      <v-btn small color="grey" class="mt-3" @click="$router.push('/create')">Adicionar colaborador</v-btn>
    </v-layout>

    <v-container class="my-5">
      <v-layout row> <!-- para ficarem em uma linha só -->
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.nome">
          <v-card flat class="ma-3">
            <v-img
              height="235"
              :src = person.avatar
            ></v-img>

            <v-card-title>{{ person.nome }}</v-card-title>
            <v-card-subtitle>{{ person.cargo }}</v-card-subtitle>

            <v-card-actions class="justify-left">
              <v-btn text color="grey" @click="showAlertDelete(person.id)">
                <v-icon>mdi-delete</v-icon>                 
              </v-btn>

              <v-btn text color="grey" @click="$router.push(`/${person.id}/edit`)">
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
import SweetAlert2 from "sweetalert2";

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
        team.sort((a,b) => {
          if(a.id < b.id) return -1;
          if(a.id > b.id) return 1;
          return 0;
        })
        this.team = team
      } catch(err){
        console.log('Erro ao buscar colaboradores. ', err);
      }
    },

    showAlertDelete(id){
      const swal = new SweetAlert2({
        html: `<h3>Excluir colaborador</h3><br>
        <p>Tem certeza de que deseja excluir este colaborador?</p>`,
        showCancelButton: true,
        cancelButtonColor: '#d5b6db',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#454345',
        confirmButtonText: 'Excluir'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteColaborador(id)
        }
      })
    },

    showAlertConfirm(){
      const swal = new SweetAlert2({
        html: `<h3>Colaborador excluído com sucesso</h3>`
      })
    },

    async deleteColaborador(id){
      try{
        await this.$axios.$delete(`api/team/deletecollaborator/${id}`);
        await this.showAlertConfirm();
        this.fetch()
      } catch(err){
        console.log('Erro ao deletar colaborador. ');
        
      }
    }
  },
  computed: {
    estaLogado(){
      return this.$store.getters['Auth/estaLogado']
    },

    redirecionar(){
      if(!this.estaLogado){
      this.$router.push('/');
    }
    }
  },
  created(){
    this.fetch()
  }

}




</script>
