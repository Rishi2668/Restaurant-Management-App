<template>
    
    <HeadVue/>
    <h1>Hello Iam {{ name }} </h1>
<table border="1" class="centre">
<tr>
<th>Id</th>
<th>Name</th>
<th>Contact</th>
<th>Address</th>
<th>Action</th>

</tr>



<tr v-for="item in restaurant" :key="item.id" font-family="Sans-serif ">
    <!-- {{ item }} -->
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{ item.Address }}</td>
    <div class="special">
    <router-link :to="'/update/'+item.id">Update</router-link> 
    </div>
    <button v-on:click="del(item.id)">Delete </button>
   

</tr>

</table>

</template>

<script>
import axios from 'axios';
import HeadVue from './Header.vue';

export default{
    name:'HomeComp',
    data(){
        return {
            name:'',
            restaurant:[],
        }
    },
    components:{
        HeadVue
    },
    methods:{
        async del(id){
           let result=await axios.delete("http://localhost:3000/restaurent/"+id);
           console.warn(result);
           if(result.status===200){
            this.loadData()
           }
        },
        async loadData(){
            let user=localStorage.getItem('user-info');
            this.name=JSON.parse(user).name //important 
            if(!user){
                this.$router.push({name:'signup'})
            }
            let result=await axios.get("http://localhost:3000/restaurent ");
            console.warn(result)
            this.restaurant=result.data
        },
    },
    async mounted(){
            this.loadData();
        }
}
</script>

<style >

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
h1{
  text-decoration-color: #74c0ef;
  color: rgb(3, 3, 68);
  text-decoration-style: solid;

   text-shadow: 2px 2px 5px rgb(18, 15, 15);
}
td{
    width: 100px;
    height: 10px;
    margin: auto;
    text-align: center;
    font-family: Sans-serif ;

 
}
.centre{
    margin-left: auto;
    margin-right: auto;
}
.special{
    font-family: Sans-serif ;

  font-size: 15px;
  padding: 20px;
  /* border-radius: 12px; */

  width: 50px;
  height: 15px;
  margin-left: 45px;
  background-color: #4c91af;
  color: #fff;
  border: 4px;
  transition-duration: 0.5s;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
   
}
.special:hover {
  background-color: #45a049;
}

th {
  background-color: #04AA6D;
  color: white;
  padding: 8px;
  width:160px;
  height: 40px;
  font-family: Sans-serif ;
}
tr:hover {background-color: white;}
tr:nth-child(){
    background-color: #f2f2f2
}
</style>