// import axios from 'axios';
// import useValidate from '@vuelidate/core';
// import { reactive, computed } from 'vue';
// import { minLength, helpers } from '@vuelidate/validators';

// export default (await import('vue')).defineComponent({
// name: 'LoginVue',
// // setup() {
// // },
// data() {
// return {
// // v$: useValidate(),
// validateInstance: useValidate(),
// email: '',
// password: '',
// // ans:false
// error: [],
// msg: [],
// disabled: [true, true],
// };
// },
// methods: {
// async login() {
// const state = reactive({
// email: '',
// password: ''
// });
// const mustBeLearnVue = (value) => value.includes('learnvue');
// const rules = computed(() => {
// return {
// email: { required, email },
// password: {
// required, minLength: minLength(5),
// mustBeLearnVue: helpers.withMessage('Must be learnvue', mustBeLearnVue),
// }
// };
// });
// const v$ = useValidate(rules, state);
// return { state, v$ },

// //      console.log(this.v$)
// let; result = await axios.get(
// `http://localhost:3000/users?email=${state.email}&password=${state.password.password}`, {
// email: this.email,
// password: this.password,
// }
// );
// // if(document.getElementById('email')){
// //     alert('entre the email')
// // }
// if (result.status == 200 && result.data.length > 0) {
// // alert("login sucesfully");
// localStorage.setItem("user-info", JSON.stringify(result.data[0]));
// this.$router.push({ name: 'Home' });
// }
// console.warn(result);
// }
// },

// mounted() {
// let user = localStorage.getItem('user-info');
// // if(user.email!=="" && user.email.length>0 && user.password.length>0 ){
// if (user) {
// this.$router.push({ name: 'Home' });
// // }}
// }
// },
// validations() {
// return {
// email: { required },
// password: { required },
// };
// },
// });
