<template>
    <img class="logo" src="../assets/restro_logo.jpg"/>
    <h1 >Sign Up</h1>
<div class="fields">
    <br/>
    <label  for ="uname"><b>Username </b></label>
    <br/>
    <input type="text" placeholder="Entre the name" v-model="name" required />
    <br/>
    <!-- <br/> -->
    <label  for ="uname"><b>Email </b></label>
    <br/>
    <input type="text" placeholder="Entre the email" v-model="email"  required />
    <br/>
    <!-- <br/> -->
    <label  for ="uname"><b>Password </b></label>
    <br/>
    <input type="password" placeholder="Entre the password" v-model="password" required />
    <br/>
    <!-- <br/> -->

    <button v-on:click="signUp()">Sign up</button>

    <p>
        <router-link to="/login">Login Page</router-link>
    </p>
</div>


</template>

<script>
import axios from 'axios';

export default{
    name:'SignUp',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp()
        {
            if(!this.email || !this.password || !this.name){
                alert("Please entre the data")
                return ;
            }
            console.warn("sign up",this.name)
            let result=await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            if(result.status==201){
                // alert("sign up done");
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'Home'})
            }
            console.warn(result);
        }
        
        
    },
    mounted(){
            let user=localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:'Home'})
            }
        }

}

</script>

<style scoped>

h1{
  text-decoration-color: #457da0;
  color: blue;
  text-decoration-style: solid;

   text-shadow: 2px 2px 5px white;
}

.fields {
    border: 3px solid #0e0e0e;
    width:400px;
    /* text-align: center; */
    margin-top:15px ;
    margin-left: 550px;
    height: 350px;     
    font-size: large; 
}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  height: 140px;
  background: #fff;
  font-family: Montserrat, sans-serif;;
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  color: #009688;
  padding: 30px;
  box-shadow:
	inset #009688 0 0 0 5px, 
    inset #059c8e 0 0 0 1px, 
    inset #0cab9c 0 0 0 10px, 
    inset #1fbdae 0 0 0 11px, 
    inset #8ce9ff 0 0 0 16px, 
    inset #48e4d6 0 0 0 17px, 
    inset #e5f9f7 0 0 0 21px, 
    inset #bfecf7 0 0 0 22px;
  text-shadow: 3px 3px 1px #bfecf7;
}
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