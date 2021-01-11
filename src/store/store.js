import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

let initCart = window.JSON.parse(localStorage.getItem('cart')||'[]')
export default store = new Vuex.Store({
    state:{
        cart:initCart
    },
    mutations:{
        addToCart(state, goods){
            const item = state.cart.find(item => {
                return item.id === goods.id
            })
            if (item) {
                item.count +=goods.count
            } else {
                state.cart.push(goods)
            }
            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        }
    },
    getters:{
        totalCount(state) {
            let c = 0
            state.cart.forEach(item => {
                c += item.count
            })
            return c
        },
        ids(state) {
            let ids = []
            state.cart.forEach(item => {
                ids.push(item.id)
            })
            return ids.join(',')

        },
        countObj(state){
            let obj = {}
            state.cart.forEach( item => {
                obj[item.id] = item.count
            })
            return obj
        }
    }
})