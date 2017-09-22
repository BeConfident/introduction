<template>
    <div>
        <div class="idea">
            <div class="idea-left">
                <img src="../../assets/love.jpg" alt="">
            </div>
            <div class="idea-right">
                <h3 class="header">{{send.idea.header}}</h3>
                <p class="title">{{send.idea.title}}</p>
                <p class="content" ref="content">{{send.idea.content}}</p>
            </div>
        </div>
        <!--<my-manage :transfer="send"></my-manage>-->
        <!--<my-hello></my-hello>-->
        <my-resume :message="send.message"></my-resume>
        <my-books :books="send.books"></my-books>
        <my-blog></my-blog>
        <!--<my-comments></my-comments>-->
        <!--<my-number></my-number>-->
    </div>
</template>
<script>
    /*import Manage from "../Manage/Manage.vue"
    import Hello from "../Hello/Hello.vue"*/
    import Resume from "../Resume/Resume.vue"
    import Books from "../Books/Books.vue"
    import Blog from "../Blog/BLog.vue"
    import Comments from "../Comments/Comments.vue"
    import Number from "../Number/Number.vue"
    export default{
        props:{
            send:{
                type:Object,
                require:true
            }
        },
        components:{
//            "my-manage": Manage,
//            "my-hello":Hello,
            "my-resume":Resume,
            "my-books":Books,
            "my-blog":Blog,
            "my-comments":Comments,
            "my-number":Number
        }
       /* mounted(){
            console.log(this.$refs.content.style.width);
            this.$nextTick(function(){
                console.log(this.$refs.content.innerText);
                console.dir(this.$refs.content.attributes[1].nodeValue);
            })
        }*/

    }
</script>
<style lang="less" scoped>
    .idea {
        width:100%;
        display:flex;
        .idea-left {
            min-width:30%;
            width:30%;
            padding:0 0.3rem;
            box-sizing:border-box;
            display:flex;
            img {
                border-radius:0.5rem;
                width:100%;
                align-self:center;
                min-height:90%;
            }
        }
        .idea-right {
            width:70%;
            max-width:70%;
            box-sizing:border-box;
            padding-right:0.3rem;
            display:flex;
            flex-direction: column;
            justify-content: center;
            .header {
                font-size:1.5rem;
                color:#69606b;
                margin-bottom:0.3rem;
            }
            .title {
                font-size:0.8rem;
                margin-bottom:0.3rem;
                color:#514753;
            }
            .content {
                font-size:0.5rem;
                text-indent:1rem;
                font-weight:200;
                width:100%;
                line-height:1rem;
            }
        }
    }
</style>