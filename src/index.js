import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './components/App.vue'

Vue.use(MintUI)
const vm = new Vue({
    el: '#app',
    render: c => c(App)
})