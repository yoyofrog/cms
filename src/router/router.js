import VueRouter from "vue-router";

import Home from '../components/tabars/home.vue'
import Member from '../components/tabars/member.vue'
import Search from "../components/tabars/search.vue";
import Shopcart from "../components/tabars/shopcart.vue"
import News from '../components/news/news.vue'
import NewsInformation from '../components/news/newsinformation.vue'
import GoodsList from '../components/goods/goodslist.vue'
import GoodsInfo from '../components/goods/goodsinfo.vue'
import GoodsDetail from '../components/goods/goodsdetail.vue'
import GoodsComment from '../components/goods/goodscomment.vue'

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
    },{
        path:'/home/news', component: News
    },{
        path:'/home/newsinfo/:id', component: NewsInformation, props: true
    },{
        path: '/home/goodslist', component: GoodsList
    },{
        path:'/home/goodsinfo/:id', component: GoodsInfo, props: true
    },{
        path:'/home/goodsdetail/:id', component: GoodsDetail, props: true
    },{
        path:'/home/goodscomment/:id', component: GoodsComment, props: true
    }],
    linkActiveClass: 'mui-active'
})