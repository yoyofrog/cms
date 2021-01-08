<template>
    <div>
<!--        swipe are-->

        <mt-swipe :auto="4000">
          <mt-swipe-item :key="index" v-for="(item, index) in lunBo">
              <img :src="item.img" alt="">
          </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lunBo:[]
            }
        },
        created() {
            this.getLunBo()
        },
        methods:{
           async getLunBo(){
               const {data: result} = await this.$http.get('/api/getlunbo')
                if (result.status === 0) {
                    this.lunBo = result.message
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 180px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }

        }
    }

</style>