<template>
    <div class="mui-numbox" id="mui-numbox" data-numbox-min='0' data-numbox-max='100'>
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number" :value="this.initCount" @change="countChange" ref="count"/>
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../../lib/mui/js/mui'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['countObj'])
        },
        methods: {
            ...mapMutations(['addToCart']),
            countChange(){

            }
        },
        mounted() {

            mui('.mui-numbox').numbox()
        },
        props:['initCount','id'],
    }
</script>

<style scoped>

</style>