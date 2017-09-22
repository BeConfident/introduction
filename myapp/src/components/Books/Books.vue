<template>
    <div class="books">
        <!--<h4>{{books.name}}</h4>-->
        <!--<ul>
            <li v-for="item in books">
                <div class="photo">
                    <img :src="" alt="">
                </div>
            </li>
        </ul>-->
    </div>

</template>
<script>
    export default{
        props:{
            books:{
                type:Object,
                require:true
            }
        }
    }
</script>
<style lang="less" scoped>
    .books {
        h4 {
            text-align:center;
            margin:1rem;
        }
        img {
            width:100px;
            height:100px;
        }
    }
</style>