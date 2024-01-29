<template>
    <div class="nav">
        
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/menu">About </router-link>
   
    <a v-on:click="logout()" href="#">Logout</a>
    </div>
</template>

<script>

export default {
    name:'HeadVue',
    methods:{
        logout(){
            console.warn("logout")
            localStorage.clear();
            this.$router.push({name:'login'})
        }
    }
}
</script>

<style scoped>
h1{
  text-decoration-color: #74c0ef;
  color: rgb(3, 3, 68);
  text-decoration-style: solid;
 
   text-shadow: 2px 2px 5px rgb(18, 15, 15);
}
.nav{
    background-color:#0d0d0d ;
    overflow: hidden;
}
.nav a{
    float: left;
    color: aliceblue;
    padding: 14px 16px;
    text-align: center;
    font-size:16px ;
    text-decoration: none;
    margin-right:5px;
    display: block;

}
.nav a:hover{
    background-color:rgb(116, 199, 229) ;
}


</style>
