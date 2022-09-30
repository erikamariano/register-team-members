<template>
    <div>
        <Nuxt/>
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