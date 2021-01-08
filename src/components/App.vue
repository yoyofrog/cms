<template>
    <div class="container" >
       <mt-header fixed title="shop">
           <span to="/" slot="left">
            <mt-button icon="back">back</mt-button>
           </span>
       </mt-header>
        <router-view></router-view>
<!--        底部区域-->
        <nav class="bot-nav mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss" scoped>
.container{
    padding-top: 40px;
}
</style>