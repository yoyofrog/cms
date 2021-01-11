<template>
    <div class="goods-container">
<!--        实现动画小球-->
<!--        钩子函数动画，这些钩子函数，都是通过事件绑定机制，绑定到transition元素上的-->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>
<!--        轮播区-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h1>tupian</h1>
                </div>
            </div>
        </div>
<!--        购买区-->
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>{{goodsInfo.title}}</h3>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span class="old">市场价：$ <del>{{goodsInfo.market_price}}</del></span>&nbsp;&nbsp;
                        <span style="font-size: 15px; font-weight: 700; color: red">销售价: ${{goodsInfo.sell_price}}</span>
                    </p>
                    <div>
                        <span>购买数量：</span>
                        <div class="mui-numbox"  data-numbox-min='0' :data-numbox-max="stockQuantity">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" @change="countChange" ref="numbox" />
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                    <div class="shop-button">
                        <mt-button type="primary" >立即购买</mt-button>
                        <mt-button type="danger" @click="addCart">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
<!--        信息区？-->
        <div class="mui-card">
            <div class="mui-card-header">
                商品参数
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>商品库存：{{goodsInfo.stock_quantity}}</p>
                    <p>上架事件：{{goodsInfo.add_time|dateFormat('YYYY-MM-DD')}}</p>
                </div>
            </div>
             <div class="mui-card-footer btnarea">

                <mt-button type="primary" size="large" plain @click="goGoodsDetail">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodsComment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import mui from '../../../lib/mui/js/mui.js'
    import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                images:[],
                goodsInfo: {},
                stockQuantity: 0,
                flag:false,
                nums: 0,
            }
        },
        created() {
            this.getLunBo();
            this.getGoodsInfo()
        },

        methods: {
            ...mapMutations(['addToCart']),
            async getLunBo() {
                const {data: result} = await this.$http.get('/api/getthumimages/' + this.id)
                if (result.status === 0) {
                    this.images = result.message
                }
            },
            async getGoodsInfo () {
                const {data} = await this.$http.get('/api/goods/getinfo/' + this.id)
                if (data.status === 0) {
                    this.goodsInfo = data.message[0]
                    this.stockQuantity = this.goodsInfo.stock_quantity
                }
            },
            goGoodsDetail() {
                this.$router.push('/home/goodsdetail/' + this.id)
            },
            goGoodsComment () {
                this.$router.push('/home/goodscomment/'+ this.id)
            },
            addCart(){
                this.flag = !this.flag
                // this.$store.commit("addToCart", {id: this.id, count: this.nums})

                this.addToCart({id: this.id, count: this.nums})
            },
            beforeEnter(el) {
                el.style.transform = 'translate(0,0)'
            },
            enter(el,done) {
                el.offsetWidth
                const ballPos = el.getBoundingClientRect()
                const badgePos = document.getElementById('badge').getBoundingClientRect()
                const left = badgePos.left - ballPos.left
                const top = badgePos.top - ballPos.top
                el.style.transform = "translate(" + left + "px, " + top + "px)"
                el.style.transition = "all 0.2s ease"
                done()
            },
            afterEnter(el) {
                this.flag = !this.flag
            },
            countChange () {
                this.nums = parseInt(this.$refs.numbox.value)
            }
        },
        props: ['id'],
        watch: {
           stockQuantity(val) {
                mui('.mui-numbox').numbox().setOption('max', val)
           }
        },
        mounted() {
            mui('.mui-numbox').numbox()
        },
    }
</script>

<style lang="scss" scoped>
 .goods-container {
     position: relative;

 }
.shop-button {
    margin-top: 10px;
}
.btnarea {
    flex-direction: column;
    button + button {
        margin-top: 5px;
    }
}
.ball {
    position: absolute;
    top: 540px;
    left:150px;
    z-index: 99;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
}

</style>