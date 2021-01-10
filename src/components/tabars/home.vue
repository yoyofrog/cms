<template>
    <div>
<!--        swipe are-->

        <mt-swipe :auto="4000">
          <mt-swipe-item :key="index" v-for="(item, index) in lunBo">
              <img :src="item.img" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/images">
                    <span class="mui-icon mui-icon-image"></span>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chat"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
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
    .mui-grid-view.mui-grid-9 .mui-media {
        border: none;
    }


</style>