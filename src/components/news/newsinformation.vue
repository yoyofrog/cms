<template>
    <div>
        <h4 class="title">{{newsInfo.title}}</h4>
        <div class='mui-ellipsis'>
            <span>发表时间： {{newsInfo.add_time|dateFormat}}</span>
            <span>点击：{{newsInfo.click}}次</span>
        </div>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
        <comment :newsid="1"></comment>
    </div>
</template>

<script>
    import comment from "../subcomponent/comment.vue";
    export default {
        props:['id'],
        data () {
            return {
                newsInfo: {}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            async getNewsInfo() {
                const {data: result } = await this.$http.get(`/api/getnew/${this.id}`)
                if (result.status === 0) {
                    this.newsInfo = result.message[0]
                    console.log(this.newsInfo)
                }
            }
        },
        components: {
            comment
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        color: red;
        font-size: 15px;
        text-align: center;

    }
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    color: #00b3ee;
}
</style>