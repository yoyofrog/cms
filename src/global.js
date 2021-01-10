import Vue from "vue";
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '../lib/mui/css/mui.css'
import '../lib/mui/css/mui-icons-extra.css'

axios.defaults.baseURL="http://www.liulongbin.top:3005/"
Vue.prototype.$http = axios

Vue.use(MintUI)