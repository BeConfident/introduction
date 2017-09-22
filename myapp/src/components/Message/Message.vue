<template>
    <div class="msg">
        <div class="message">
            <div class="message-left">
                <ul>
                    <li v-for="(item,index) in message.content" @click="sendindex(index)"
                        :class="{'on':current == index}">{{item.name}}</li>
                </ul>
            </div>
            <div class="message-right" >
                <div ref="right">
                    <dl v-for="item in message.content">
                        <dt>{{item.name}}</dt>
                        <dd v-for="every in item.information" class="info">
                            <p>
                                <span class="infor-name">{{every.name}}</span>
                                <em class="infor-educa">{{every.education}}</em>
                                <i class="infor-time">{{every.time}}</i>
                            </p>
                            <ul>
                                <li v-for="some in every.content">
                                    <span class="content-time">{{some.time}}</span>
                                    <span class="content-detail">{{some.detail}}</span>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>


</template>
<script>

    import Data from "../../../data.json"
    import IScroll from "../../static/js/iscroll.js"
    export default{
        data(){
            return{
                message:Data.message,
                current:0,
                scroll:{}
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
                var dls = this.$refs.right.getElementsByTagName("dl");
                this.scroll.scrollToElement(dls[index]);

            }
        }
    }
</script>
<style lang="less" scoped>
        .message {
            width:100%;
            height:19.1rem;
            display:flex;
            overflow:hidden;
            .message-left {
                width:20%;
                min-width:20%;
                li {
                    font-size:0.7rem;
                    font-weight:500;
                    padding:2rem 0;
                    display:flex;
                    justify-content: center;
                    border-bottom:0.06rem solid rgba(7,17,27,0.1);
                    background:#f3f5f7;
                    cursor:pointer;
                    color:rgb(77,85,93);
                    &.on{
                        background:#fff;
                        color:rgb(240,20,20);
                    }

                }
            }
            .message-right {
                width:80%;
                dl {
                    dt {
                        font-size:0.8rem;
                        font-weight:500;
                        color:rgb(147,153,159);
                        line-height:1.5rem;
                        border-left:0.1rem solid #d9dde1;
                        background:#f3f5f7;
                    }
                    .info{
                        padding:0.2rem 0.5rem;
                        p {
                            display:flex;
                            justify-content: space-between;
                            font-size:0.7rem;
                            font-weight:normal;
                            .infor-time {
                                font-size:0.6rem;
                                font-weight:200;
                            }
                        }
                        .content-time,.content-detail {
                            font-size:0.5rem;
                            font-weight:200;
                        }
                    }
                }
            }
        }

</style>