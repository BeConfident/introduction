<template>
    <div>
        <fieldset>
            <legend>{{message.name}}</legend>
            <div class="message">
                <div class="message-left">
                    <ul>
                        <li v-for="(item,index) in message.content" @click="sendindex(index)"
                            :class="{'on':current == index}">{{item.name}}</li>
                    </ul>
                </div>
                <div class="message-right" >
                    <div ref="right">
                        <dl v-for="(item,index) in message.content" :class="{'active':current ==index}">
                            <dt>{{item.name}}</dt>
                            <dd v-for="every in item.information" class="info">
                                <p class="intro">
                                    <span class="infor-name">{{every.name}}</span>
                                    <em class="infor-educa">{{every.education}}</em>
                                    <i class="infor-time">{{every.time}}</i>
                                </p>
                                <div class="cycle">
                                    <p>{{every.type}}</p>
                                    <p>{{every.tech}}</p>
                                    <p>{{every.tesk}}</p>
                                </div>
                                <ul>
                                    <li v-for="some in every.content">
                                        <span class="content-time" v-show="some.time">{{some.time}}</span>
                                        <span class="content-detail" v-show="some.detail">{{some.detail}}</span>
                                    </li>
                                </ul>
                                <p class="content-website" v-show="every.website">网址为:
                                    <a :href="every.website">{{every.website}}</a></p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
    import IScroll from "../../static/js/iscroll.js"
    export default{
        data(){
            return {
                current:0,
                scroll:{}
            }
        },
        props:{
            message:{
                type:Object,
                require:true
            }
        },
        mounted(){
            this.scroll = new IScroll(".message-right",{click:true});
        },
        methods:{
            sendindex(index){
                let count =0;
                count++;
                if(count == 1){
                    this.scroll.refresh();
                    count=0;
                }
                this.current = index;
                let dls = this.$refs.right.getElementsByTagName("dl");
                this.scroll.scrollToElement(dls[index]);
            }
        }
    }
</script>
<style lang="less" scoped>
    fieldset{
        width:99%;
        height:19.8rem;
        border:0.05rem solid rgba(7, 17, 27, 0.1);
        margin: 1rem auto;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        overflow:hidden;
        /*background:url(../../assets/resume.jpeg) center;
        background-size:100% 100%;*/
        background:#f2f2f2;
        /*position:relative;*/
        legend {
            margin:0 auto;
/*            position:absolute;
            top:0;
            left:50%;
            z-index:10;
            transform:translateX(-50%) translateY(-50%);*/
        }
        .message {
            width:100%;
            height:95%;
            display:flex;
            overflow:hidden;
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            .message-left {
                width:20%;
                min-width:20%;
                ul {
                    height:100%;
                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size:0.7rem;
                        font-weight:500;
                        border-bottom:0.06rem solid rgba(7,17,27,0.1);
                        /*background:rgba(243,245,247,0.5);*/
                        cursor:pointer;
                        color:rgb(77,85,93);
                        height:25%;
                        align-item:center;

                        &.on{
                            background:rgba(255,255,255,0.7);
                            color: #008000;
                        }

                    }
                }
            }
            .message-right {
                width:80%;
                dl {
                    &.active {
                        background: #fff;
                    }
                    dt {
                        font-size:0.8rem;
                        font-weight:500;
                        /*color:rgb(147,153,159);*/
                        line-height:1.5rem;
                        border-left:0.1rem solid #d9dde1;
                        background:rgba(243,245,247,0.7);
                    }
                    .info{
                        padding:0.2rem 0.5rem;
                        .intro {
                            display:flex;
                            flex-wrap:wrap;
                            justify-content: space-between;
                            font-size:0.7rem;
                            font-weight:normal;
                            .infor-time {
                                font-size:0.5rem;
                                font-weight:200;
                            }
                        }
                        .cycle {
                            font-size:0.5rem;
                            font-weight:200;
                            padding-bottom:0.2rem;
                            p {
                                padding-top:0.2rem;
                            }
                        }
                        li {
                            display:flex;
                            flex-direction: row;
                            height:0.8rem;
                            font-size:0.5rem;
                            font-weight:200;
                            .content-time {
                                padding-right:0.2rem;
                            }
                            .content-detail{
                                display: flex;
                                flex-direction: column;
                                /*justify-content: center;*/
                            }
                        }
                        .content-website {
                            font-size:0.5rem;
                            font-weight:500;
                            a {
                                color:#008000;
                                text-decoration:none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>