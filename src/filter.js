import Vue from 'vue'
import moment from "moment";

//定义全局过滤器
Vue.filter('dateFormat', function (val, dateForm='YYYY-MM-DD') {
    return moment(val).format(dateForm)

})