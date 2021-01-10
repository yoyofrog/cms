import Vue from 'vue'
import VueRouter from "vue-router";

import router from './router/router'
import App from './components/App.vue'
import './global'
import './filter'

Vue.use(VueRouter)

const vm = new Vue({
    el: '#app',
    router,
    render: c => c(App)
})