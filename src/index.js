import Vue from 'vue'
import VueRouter from "vue-router";
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '../lib/mui/css/mui.css'
import '../lib/mui/css/mui-icons-extra.css'

import router from './router/router'
import App from './components/App.vue'

axios.defaults.baseURL="http://www.liulongbin.top:3005/"
Vue.prototype.$http = axios


Vue.use(MintUI)
Vue.use(VueRouter)
const vm = new Vue({
    el: '#app',
    router,
    render: c => c(App)
})