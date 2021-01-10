<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" :key="item.id" v-for="item in news">
					<router-link :to="'/home/newsinfo/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis'><span>发表时间：{{item.add_time|dateFormat}}</span><span>点击次数：{{item.click}}</span></p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news:[]
            }
        },
        created() {
            this.getNews()
        },
        methods: {
            async getNews() {
                const{ data: result} = await this.$http.get('/api/getnewslist')
                if (result.status == 0) {
                    this.news = result.message
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    color: #00b3ee;
}
</style>