import VueRouter from "vue-router";

import Home from '../components/tabars/home.vue'
import Member from '../components/tabars/member.vue'
import Search from "../components/tabars/search.vue";
import Shopcart from "../components/tabars/shopcart.vue"

export default router = new VueRouter({
    routes:[{
        path:'/', redirect:'/home'
    },{
        path:'/home', component: Home
    },{
        path:'/member', component: Member
    },{
        path:'/search', component: Search
    },{
        path:'/shopcart', component: Shopcart
    }],
    linkActiveClass: 'mui-active'

})