<template>
    <div id="app">
        <div class="banner" v-show="!show">
            <h1>{{data.name}}</h1>
            <p>{{data.begin}}</p>
                <div class="triangle" >
                    <div class="banner-down" @click="change">
                        <em></em>
                        <i></i>
                    </div>
                </div>
        </div>
        <!--半透明组件的动态显示-->
        <transition name="slide">
            <my-main v-show="show"></my-main>
        </transition>
        <!--标题的动态显示-->
        <transition name="fade">
            <h2 v-show="visible">{{data.name}}</h2>
        </transition>
        <!--段落的动态显示-->
        <transition name="bounce">
            <p class="content" v-show="visible">{{data.content}}</p>
        </transition>
        <transition name="screen">
            <router-view v-show="visible" :send="data"></router-view>
        </transition>

    </div>
</template>
<script>
    import Main from "./components/Main/Main.vue"
//    import data from "../data.json"
    export default {
        data(){
            return {
                show:false,
                data:{},
                visible:false
            }
        },
        components:{
            "my-main": Main
        },
        created(){
            this.$axios.get("http://localhost:3000/blog")
                .then((res) => {
                    this.data = res.data;
                    //console.log(this.data);
                })
                .catch((err) =>{
                    console.log(err);
                })
        },
        methods:{
            change(){
                this.show=!this.show;
                let _this = this;
                setTimeout(function(){
                    _this.visible = true;

                },2000);
            }
        }
    }
</script>
<style lang="less" scoped>
    @keyframes slideInDown {
        0% {
            transform:translateY(-50%);
            opacity:0;
        }
        100% {
            transform: translateY(0);
            opacity:1;
        }
    }
    @keyframes slideOutUp {
        0% {
            transform:translateY(0);
            opacity:1;
        }
        100% {
            transform:translateY(-50%);
            opacity:0;
        }
    }
    .slide-enter-active{
        animation:slideInDown 2s;
    }
    .slide-leave-active{
        animation:slideOutUp 2s;
    }
    @keyframes move {
        0%{
            margin-top:0%;
            opacity:0;
        }
        100% {
            margin-top:40%;
            opacity:1;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity:0;
            color:#fff;
            transform:translateX(-50%) translateY(-50%) scale(0);
        }
        50% {
            opacity:0.5;
            transform:translateX(-50%) translateY(-50%) scale(1.2);
        }
        100% {
            opacity:1;
            transform:translateX(-50%) translateY(-50%) scale(1);
        }
    }
    @keyframes fadeOut {
        0% {
            opacity:1;
            transform: translateX(-50%) translateY(-50%) scale(1);
        }
        50% {
            opacity:0.5;
            transform: translateX(-50%) translateY(-50%) scale(1.5);
        }
        100% {
            opacity:0;
            transform:translateX(-50%) translateY(-50%) scale(0);
        }
    }
    .fade-enter-active {
        animation: fadeIn 3s;
    }
    .fade-leave-active {
        animation: fadeOut 2s;
    }
    @keyframes bounceIn {
        0% {
            transform:translateX(200%) translateY(-50%);
        }
        50% {
            transform:translateX(-100%) translateY(-50%);
        }
        100% {
            transform:translateX(-50%) translateY(-50%);
        }
    }
    @keyframes bounceOut {
        0% {
            transform:translateX(-50%) translateY(-50%);
        }
        50% {
            transform:translateX(-100%) translateY(-50%);
        }
        100% {
            transform:translateX(200%) translateY(-50%);
        }
    }
    .bounce-enter-active {
        animation:bounceIn 2s;
    }
    .bounce-leave-active {
        animation: bounceOut 2s;
    }
    .screen-enter,.screen-leave-active{
        opacity:0;
    }
    .screen-enter-active,.screen-leave-active{
        transition:all 2s;
    }
    #app {
        height:100%;
        position:relative;
        overflow-x: hidden;
        .banner {
            width:100%;
            height:100%;
            background:url("assets/bg.jpg") center;
            background-size: cover;
            h1 {
                color:#fff;
                font-size: 3rem;
                height:75%;
                display:flex;
                align-items: center;
                justify-content: center;
                font-weight:bold;
            }
            p {
                color:#fff;
                font-size:1rem;
                text-align:center;
                height:7%;
                font-weight:200;

            }
            .triangle {
                height:9%;
                position:relative;
                width:6%;
                margin: 0 auto;
                .banner-down {
                    position:absolute;
                    top:0rem;
                    left:50%;
                    transform:translate(-50%);
                    display:flex;
                    flex-direction: column;
                    margin-top:50%;
                    width:100%;
                    height:55%;
                    animation:move ease 1.5s infinite;
                    cursor:pointer;
                    /*background:red;*/
                    em {
                        width:0.8rem;
                        height:0.8rem;
                        border-width:0.1rem;
                        border-style: solid;
                        border-color:transparent #fff #fff transparent;
                        position:absolute;
                        left:50%;
                        top:-0.5rem;
                        transform:translate(-50%) rotate(45deg);
                    }
                    i {
                        width: 0.8rem;
                        height:0.8rem;
                        border-width:0.1rem;
                        border-style: solid;
                        border-color:transparent #fff #fff transparent;
                        position:absolute;
                        left:50%;
                        top:0rem;
                        transform:translate(-50%) rotate(45deg);
                    }
                }
            }
        }
        h2 {
            color:#514753;
            font-size: 3rem;
            font-weight:bold;
            position:absolute;
            height:8rem;
            width:12rem;
            left:50%;
            top:50%;
            transform:translateX(-50%) translateY(-50%);
            z-index:5;
        }
        .content {
            color:#514753;
            font-size:1rem;
            font-weight:200;
            position:absolute;
            left:50%;
            top:50%;
            transform:translateX(-50%) translateY(-50%);
            z-index:10;
        }
    }

</style>

