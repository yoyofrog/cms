<template>
    <div>
        <div class="goods-list">
            <router-link tag="div" :to="'/home/goodsinfo/' + item.id" class="goods-item" :key="item.id" v-for="item in goodsList">
                <img :src="item.img_url" alt="">
                <h3 class="title">{{item.title}}</h3>
                <div class="info">
                    <p class="price">
                        <span class="new">${{item.sell_price}}</span>
                        <span class="old">${{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{item.stock_quantity}}件</span>
                    </p>

                </div>

            </router-link>
        </div>
        <mt-button @click="getMoreGoods" class="more" type="danger" size="large">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               goodsList: [],
               pageindex: 1,
               isLoaded: false,
               isAll: false,
           }
       },
        created() {
            this.getGoodsList()
        },
        methods:{
            async getGoodsList () {
                const {data} = await this.$http.get('/api/getgoods?pageindex=' + this.pageindex)
                if (data.status === 0) {
                    if (data.message.lenght <= 0) {
                        this.isAll = true
                    }
                    this.goodsList = this.goodsList.concat(data.message)
                    this.isLoaded = true
                }
            },
            getMoreGoods () {
                if (this.isAll) {
                    return
                }
                if (this.isLoaded) {
                    this.isLoaded = false
                    this.pageindex +=1
                    this.getGoodsList()
                }

            }
        },
        mounted() {
           this.isLoaded = true
        }
    }
</script>

<style lang="scss" scoped>
 .goods-list {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     padding: 8px;
     .goods-item {
         display: flex;
         margin-top: 8px;
         padding-bottom: 0;
         width: 49%;
         border: 1px solid #ccc;
         box-shadow: 0 0 2px gray;
         align-items: stretch;
         flex-direction: column;
         justify-content: space-between;
         img {
             width: 100%;
         }
         .title {
             font-size: 14px;
         }
         .info {
             margin:0 2px;
             padding: 8px 5px 0 5px;
             background-color: #ccc;
             overflow: hidden;
             .price {
                 .new {
                     color: red;
                     font-size: 16px;
                     font-weight: bold;
                 }
                 .old {
                     margin-left: 15px;
                     text-decoration: line-through;

                 }
             }
             .sell {
                display: flex;
                 justify-content: space-between;
             }
         }
     }

 }
 .more {
     margin-top: 10px;
 }
</style>