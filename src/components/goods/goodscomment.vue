<template>
    <div>
       <comment :newsid="id"></comment>
    </div>
</template>

<script>
    import comment from '../subcomponent/comment.vue'

    export default {
        props:['id'],
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>

</style>