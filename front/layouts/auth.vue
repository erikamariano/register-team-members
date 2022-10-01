<template>
    <div>
        <Nuxt/>
        
        <!-- Menu superior -->
        <v-app-bar color="#d3cade" fixed app>
            <v-spacer></v-spacer>
            <v-btn class="grey lighten-4 black--text" small @click="$router.push('/')">Login</v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default{
    layout: 'auth',
    data(){
        return{
            title: 'Página de login'
        }
    }
}
</script>

<style>
    html{
        background-color: rgb(236, 229, 240);
    }
</style>