import HomeComp from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createWebHistory,createRouter } from 'vue-router'
import LoginVue from './components/Login.vue'
import AddVue from './components/Add.vue'
import UpdateVue from './components/Update.vue'
import MenuVue from './components/Menu.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:'Home',
            component:HomeComp,
            path:'/'
        },
        {
            name:'signup',
            path:'/sign-up',
            component:SignUp
        },
        {
            name:'login',
            path:'/login',
            component:LoginVue
        },
        {
            name:'Add',
            path:'/add',
            component:AddVue
        },
        {
            name:'Update',
            path:'/update/:id',
            component:UpdateVue
        },
        {
            name:'menu',
            path:'/menu',
            component:MenuVue
        }
    ]
});
export default router;