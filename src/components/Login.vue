

<template>
    <img class="logo" src="../assets/restro_logo.jpg"/>
    <h1 >Login Up</h1>
<div class="fields">

    <br/>
    <!-- <br/> -->
    <label  for ="uname"><b>Email </b></label>
    <br/>
    <input type="text" placeholder="Entre the email" v-model="email"  required />
    <br/>
    <!-- <br/> -->
    <label  for ="uname"><b>Password </b></label>
    <input type="password" placeholder="Entre the password" v-model="password" required />
    <br/>
    <!-- <br/> -->
    <button v-on:click="login()" type="button">Login</button>
  
  <p color="white">
    <router-link to="/sign-up">SignUp Page</router-link>
  </p>
  <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>


</div>
  </template>
  

<script>
import axios from 'axios';


export default {
    name:'LoginVue',

data(){
        return {

            email:'',
            password:'',
            // ans:false
            error:[],
            msg:[],
            disabled: [true, true],
    }
},
    methods:{
    async login(){
        if (!this.email || !this.password) {
            alert("Please enter both email and password");
      return;
    }
            
                const response=await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`,{
                    email:this.email,
                    password:this.password,
                })


            if(response.status==200 ){
                let result = response.data;
                if( result && Array.isArray(result) && result.length > 0){
                // alert("login sucesfully");
                localStorage.setItem("user-info",JSON.stringify(result[0]));
                this.$router.push({name:'Home'})
                }
                else{
                    this.$router.push({ name: 'login' });
                    alert("invalid id or password");
                }
            }

            console.warn(response)
            }

           
        },
    mounted(){
            let user=localStorage.getItem('user-info');
            // if(user.email!=="" && user.email.length>0 && user.password.length>0 ){
                if(user){
                    this.$router.push({name:'Home'})

            // }}
                }
        },

}
</script>

<style scoped >


h1{
  text-decoration-color: #457da0;
  color: blue;
  text-decoration-style: solid;
  /* text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
   */
   text-shadow: 2px 2px 5px white;
}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 130px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  height: 150px;
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

/* .logo{
  display: block;
  margin-left: 600px;
  margin-right: auto;
  width: 20%;
}
body{
  padding: 0;
  margin: 0;
  /* background-color: #fff; */
/* } */
/* .fields input ,.login input,.add input { 
    width: 300px;
    height: 50px;
    margin-left: 610px;
    /* margin-top: 0px; */
    /* padding:3px ; */
    /* display: block; */
    /* border-color:rgb(114, 114, 156) ; */
    /* border-width: 4px ; */
    /* box-sizing: border-box; */

/* } */
/* .fields button,.login button{ */

    /* margin-left: auto; */
    /* size: 10px; */
    /* width: 300px; */
    /* height: 30px; */
    /* border: 2px solid rgb(255, 113, 47); */
    /* color:white; */
    /* cursor: pointer; */

    /* background-color: skyblue; */
/* } */  
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
body{
  /* background-color:green ; */
  background-color: #F3EBF6;
    font-family: 'Ubuntu', sans-serif;
}

/* .logo {
  max-width: 100px;
} */

.login-form {
  max-width: 300px;
  padding: 20px;
  border: 1px solid #130202;
  border-radius: 8px;
  background-color: #0c0909;
  box-shadow: 0 0 10px rgba(19, 18, 18, 0.1);
}

.login-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  width: 100px;
  padding: 10px;
  background-color: #4c91af;
  color: #e8d9d9;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 15px;
  text-align: center;
  color: white;
}
.fields {
    border: 3px solid #0a0a0a;
    width:400px;
    /* text-align: center; */
    margin-top:15px ;
    margin-left: 550px;
    height: 360px;     
    font-size: large; 
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(22, 20, 20, 0.27);
  color: #0e0e0f;
  text-align: center;
}
.social div:hover{
  background-color: rgba(16, 228, 16, 0.47);
}
.social .go{
    margin-left:30px; 
    color: rgb(20, 19, 19);
}
.social .fb{
  margin-left: 30px;
}
.social i{
  margin-right: 4px;
}


</style>
