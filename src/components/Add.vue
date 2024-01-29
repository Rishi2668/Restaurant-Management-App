<template>
    
    <HeadVue/>
    <h1>Add Restaurant </h1>
    <form class="add">
        <!-- <br/> -->
        <br/>
        <label  for ="uname"><b>Username </b></label>
        <br/>
        <input type="text" name="name" placeholder="Entre the name" v-model="restaurent.name" />
        <br/>
        <label for="uname"><b>Contact   </b></label>
        <br/>
        <input type="text" name="contact" placeholder="Entre the Contact" v-model="restaurent.contact"/>
        <br/>
        <label for="uname"><b>Address  </b></label><br/>
        <input type="text" name="Address" placeholder="Entre the Address" v-model="restaurent.contact"/>
        <br/>
        <button type="button" v-on:click="addrestro()">Add Restaurant</button>
    </form>
</template>

<script>
import HeadVue from './Header.vue';
import axios from 'axios';
export default{
    name:'AddVue',
    data(){
        return {
            restaurent:{
                name:'',
                contact:'',
                Address:''
        }
    }
    },
    components:{
        HeadVue
    },
    methods:{
        async addrestro(){
            if(!this.restaurent.name || !this.restaurent.contact || !this.restaurent.Address){
                alert("Please entre the required fields")
                return ;
            }
            console.warn(this.restaurent);
            let result=await axios.post("http://localhost:3000/restaurent",{
                name:this.restaurent.name,
                contact:this.restaurent.contact,
                Address:this.restaurent.Address
            })
            if(result.status===201){
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
            let user=localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'signup'})
            }
        }
}
</script>

<style scoped>
.fields {
    border: 3px solid #0e0e0e;
    width:400px;
    /* text-align: center; */
    margin-top:15px ;
    margin-left: 550px;
    height: 320px;     
    font-size: large; 
}
form {
    border: 3px solid #f1f1f1;
    width:400px;
    /* text-align: center; */
    margin-top:15px ;
    margin-left: 550px;
    height: 320px;     
    font-size: large; 
}
/* h1{
  text-decoration-color: #74c0ef;
  color: rgb(3, 3, 68);
  text-decoration-style: solid;
  /* text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
   */
   /* text-shadow: 2px 2px 5px rgb(18, 15, 15); */
/* }  */
.login-form {
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  width: 100px;
  padding: 10px;
  background-color: #4c91af;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}


</style>