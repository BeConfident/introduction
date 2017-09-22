<template>
    <div>
        <ul>
            <li><router-link to="/idea/message">{{transfer.message.name}}</router-link></li>
            <li><router-link to="/idea/blog">{{transfer.blog.name}}</router-link></li>
            <li><router-link to="/idea/books">{{transfer.books.name}}</router-link></li>
        </ul>
        <router-view></router-view>
    </div>

</template>
<script>
    export default{
        props:{
            transfer:{
                type:Object,
                require:true
            }
        }
    }
</script>
<style lang="less" scoped>
    ul {
        display:flex;
        justify-content: space-around;
        border-bottom:0.05rem solid rgba(7,17,27,0.2);
        margin-top:1rem;
        padding:0.1rem 0.5rem;
        li {
            a {
                color:rgb(77,85,93);
                font-size:0.7rem;
                text-decoration: none;
                font-weight:500;
                &.router-link-active{
                    color:red;
                }
            }
        }
    }
</style>