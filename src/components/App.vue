<template>
    <div class="container" >
       <mt-header fixed title="shop">
           <span to="/" slot="left">
            <mt-button v-show="isShow" icon="back" @click="back">back</mt-button>
           </span>
       </mt-header>
		<transition>
			<router-view></router-view>
		</transition>

<!--        底部区域-->
        <nav class="bot-nav mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{totalCount}}</span></span>
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
	import {mapGetters} from 'vuex'
    export default {
    	data(){
    		return {
    			isShow: false
			}
		},
		methods: {
        	back() {
        		this.$router.back()
			}
		},
		computed: {
    		...mapGetters(['totalCount']),
		},
		watch:{
        	"$route.path": function(newval) {
        		if (newval === "/home") {
        			this.isShow = false
				} else {
        			this.isShow = true
				}
			}
		}
    }
</script>

<style lang="scss" scoped>
.container{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;
}
	.v-enter {
		opacity: 0;
		transform: translate(100%) ;
	}
	.v-leave-to {
		position: absolute;
		opacity: 0;
		transform: translate(-100%) ;
	}

	.v-enter-active, .v-leave-active{
		transition: all 0.4s ease;
	}
</style>