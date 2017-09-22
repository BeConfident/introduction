<template>
    <div class="main">
        <div class="introduce">
        </div>
    </div>
</template>
<script>
    export default{
        name:"main"
    }
</script>
<style lang="less" scoped>
    .main {
        width:100%;
        height:70%;
        background:url(../../assets/bg.jpg) bottom;
        background-size:cover;
        .introduce {
            background-image: linear-gradient(to bottom,rgba(255,255,255,0.4),rgba(255,255,255,1) 90%);
            width:100%;
            height:101%;
        }
    }
</style>