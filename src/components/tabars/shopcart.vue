<template>
    <div>
        <div class="mui-card" :key="item.id" v-for="item in cartList">
            <div class="mui-card-content">
                <div class="mui-card-content-inner goods-item">
                    <mt-switch ></mt-switch>
                    <img :src="item.thumb_path">
                    <div class="info">
                        <h3 class="title">{{item.title}}</h3>
                        <div class="goods-info">
                            <span class="price">${{item.sell_price}}</span>
                            <NumBox :initCount="countObj[item.id]"></NumBox>
                            <span >删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner total-info">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="total"></span>件，总价 <span
                                class="total"> ￥</span></p>
                    </div>
                    <div class="right">
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import NumBox from '../subcomponent/num-box.vue'

    export default {
        data() {
            return {
                cartList: []
            }
        },
        created() {
            this.getCartList()
        },
        methods:{
            async getCartList() {
               if (this.ids.length <= 0) {
                    return
                }
                const {data} = await this.$http.get(`/api/goods/getshopcarlist/${this.ids}`)
                if (data.status === 0) {
                    this.cartList = data.message
                }
            }
        },
        computed: {
            ...mapGetters(['ids','countObj'])
        },
        components:{
            NumBox
        }
    }
</script>

<style lang="scss" scoped>
   .goods-item {
        display: flex;
        justify-content: space-between;

        img {
            width: 60px;
            height: 60px;
        }

        .title {
            font-size: 15px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .goods-info {
                display: flex;
                justify-content: space-between;
                line-height: 35px;

                .price {
                    font-weight: 700;
                    color: palevioletred;
                }
            }
        }

    }

    .total-info {
        display: flex;
        justify-content: space-between;

        .total {
            color: red;
            font-weight: 700;
        }
    }
</style>