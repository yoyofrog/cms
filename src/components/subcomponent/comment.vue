<template>
    <div>
        <h3>发表评论{{newsid}}</h3>
        <hr>
        <div class="mui-input-row" style="margin: 10px 5px;">
            <textarea v-model="comment" id="textarea" rows="5" placeholder="请输入评论"></textarea>
        </div>

        <mt-button type="primary" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" :key="i" v-for="(item,i) in comments">
                <div class="cmt-item-title">第{{i+1}}楼&nbsp;用户：{{item.username}}&nbsp;发表时间：{{item.add_time|dateFormat}}</div>
                <div class="cmt-item-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        props:['newsid'],
        data() {
            return {
                comments: [],
                id:'',
                pageindex: 1,
                comment:''
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            async getComments() {
                const {data: result} = await this.$http.get(`/api/getcomments/${this.newsid}?pageindex=` + this.pageindex)
                if (result.status === 0) {
                   this.comments = this.comments.concat(result.message)
                }
            },
            loadMore() {
                this.pageindex += 1
                this.getComments()
            },
            async postComment(){
                if(this.comment.length <= 0) {
                    return Toast('请输入内容')
                }
                const {data: result}  = await this.$http.post(`/api/postcomment/${this.newsid}`,
                    {artid: this.newsid, content: this.comment}
                    )

                if(result.status === 0) {
                    Toast(result.message)
                    this.comments.unshift({user_name:'匿名用户', add_time: new Date(), content: this.comment.trim()})
                    this.comment= ''
                }
            }
        },
        watch: {
            newsid :function (val) {
                this.id = val

            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-button {
        width: 100%;
    }
    .cmt-list{
        padding-top: 10px;
        .cmt-item{
            padding-top:5px;
            .cmt-item-title {
                background-color: grey;
            }
        }
    }

</style>