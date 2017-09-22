<template>
    <div class="blog-info">
        <div class="blog">
            <div class="blog-input">
                <form>
                    <h4>{{blog.name}}</h4>
                    <p class="blog-intro">{{blog.paragrahf}}</p>
                    <label>
                        <p>标题</p>
                        <input type="text" name="title" v-model.trim="title" placeholder="标题" @blur="titlemsg()"
                               ref="title"/>
                        <span v-if="showtitle"><i>&times;</i>不能超过20个字符</span>
                    </label>
                    <label>
                        <p>作者</p>
                        <input type="text" name="author" v-model.trim="author" placeholder="作者" @blur="authormsg()"
                               ref="author"/>
                        <span v-if="showauthor"><i>&times;</i>不能超过10个字符</span>
                    </label>
                    <label>
                        <p>内容</p>
                        <textarea name="content" v-model.trim="content" placeholder="期待您的交流内容"
                                  @blur="contentmsg()" ref="content"></textarea>
                        <span v-if="showcontent"><i>&times;</i>不能超过150个字符</span>
                    </label>
                    <button class="submit" @click.prevent="submitmsg()">提交</button>
                </form>
            </div>
        </div>
        <div class="blog-msg">
            <div class="msg-left" v-show="substrmsg.length" ref="msg">
                <ul>
                    <li v-for="item in substrmsg">
                        <h4>{{item.title}}</h4>
                        <p class="blog-info">发表于<a href="#">{{item.time}}</a> 由 <a href="#">{{item.author}}</a></p>
                        <p class="blog-content">{{item.content}}</p>
                    </li>
                </ul>

            </div>
            <div class="msg-right" v-show="substrmsg.length">
                <h4>最新留言</h4>
                <ul>
                    <li v-for="item in substrmsg">{{item.title}}</li>
                </ul>

            </div>
        </div>
        <button class="blog-down" v-show="downup" @click="blogdown()"></button>
        <button class="blog-up"  v-show="!downup" @click="blogup()"></button>
    </div>


</template>
<script>
//    import IScroll from "../../static/js/iscroll.js"
//    import data from "../../static/js/send.js"
    export default{
        data(){
            return {
                blog: {},
                title: "",
                author: "",
                content: "",
                time: "",
                showtitle: false,
                showauthor: false,
                showcontent: false,
                downup: true,
                tempmsg: []
            }
        },
        created(){
            this.$axios.get("http://localhost:3000/blog")
                .then((res) => {
                    this.blog = res.data.blog;
                    //console.log(this.data);
                })
                .catch((err) =>{
                    console.log(err);
                })
        },
        methods: {
            submitmsg(){
                if (this.title == "" || this.title.length > 20) {
                    return false;
                } else if (this.author == "" || this.author.length > 10) {
                    return false;
                } else if (this.content == "" || this.content.length > 150) {
                    return false;
                }
                this.time = new Date().toLocaleString();
                let temp = {
                    title: this.title,
                    author: this.author,
                    content: this.content,
                    time: this.time
                }
                this.blog.detail.unshift(temp);
                this.title = "";
                this.author = "";
                this.content = "";
                /*let ul = this.$refs.msg.getElementsByTagName("ul")[0];
                this.scroll.scrollToElement(ul);*/

            },
            titlemsg(){
                if (this.title.length > 20) {
                    this.showtitle = true;
                    this.$refs.title.focus();
                } else {
                    this.showtitle = false;
                }
            },
            authormsg(){
                if (this.author.length > 10) {
                    this.showauthor = true;
                    this.$refs.author.focus();
                } else {
                    this.showauthor = false;
                }
            },
            contentmsg(){
                if (this.content.length > 150) {
                    this.showcontent = true;
                    this.$refs.content.focus();
                } else {
                    this.showcontent = false;
                }
            },
            blogdown(){
                this.downup = !this.downup;
            },
            blogup(){
                this.downup = !this.downup;

            },
        },
        computed: {
            substrmsg(){
                if(this.downup){
                    this.tempmsg = this.blog.detail.slice(0, 3);

                }else {
                    this.tempmsg = this.blog.detail;
                }
                return this.tempmsg;
            }
        }
    }
</script>
<style lang="less" scoped>
    .blog-info {
        position:relative;
        .blog {
            background:url(../../assets/blog.jpg) center;
            background-size:cover;
            margin-bottom:1rem;
            .blog-input {
                background-image:linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0.5));
                height:100%;
                padding-top:1rem;

                form {
                    width:75%;
                    margin:0 auto;

                    h4 {
                        font-size:1.5rem;
                        color:#69606b;
                        margin-bottom:1rem;
                    }
                    .blog-intro {
                        font-size:1rem;
                        color:#69606b;
                        margin-bottom: 1rem;
                    }
                    label {
                        display:block;
                        position:relative;
                        p {
                            font-size:0.8rem;
                            color:#69606b;
                            margin:0.3rem 0;
                        }
                        span {
                            font-size:0.5rem;
                            color:red;
                            border-radius: 0.1rem;
                            i {
                                border:0.01rem solid red;
                                display:inline-flex;
                                border-radius:50%;
                                justify-content: center;
                                align-items: center;
                                width:0.5rem;
                                height:0.5rem;
                                font-size:0.6rem;
                            }
                        }
                        input,textarea {
                            width:50%;
                            height:1.5rem;
                            border:0;
                            outline:0;
                            background:rgba(255,255,255,0.8);
                            border-radius:0.2rem;
                            text-indent:0.3rem;
                            font-size:0.6rem;
                        }
                        textarea {
                            width:80%;
                            height:6rem;
                        }
                    }
                    .submit {
                        width:2.5rem;
                        height:2.5rem;
                        border-radius:50%;
                        padding: 0rem;
                        border: 0;
                        margin: 0.5rem auto;
                        display: block;
                        background:rgba(255,255,255,0.8);
                        cursor:pointer;
                        font-size:0.6rem;
                        outline:0;
                        font-weight:700;
                        &:hover {
                            background:rgba(255,255,255,0.5);
                            border:0.05rem solid #fff;
                            color:#008000;
                        }
                    }
                }
            }
        }
        .blog-msg {
            width:80%;
            margin:1rem auto;
            display:flex;
            justify-content: space-between;
            .msg-left {
                flex-grow:1;
                margin-right:1rem;
                max-width:74%;
                li {
                    border-bottom:0.01rem solid #ccc;
                    width:100%;
                    h4 {
                        font-size:0.7rem;
                        margin:0.5rem 0rem;
                    }
                    .blog-info {
                        font-size:0.5rem;
                        margin-bottom:0.5rem;
                        a {
                            /*font-size:0.5rem;*/
                            text-decoration: none;
                            color:#0366D6;
                        }
                    }
                    .blog-content {
                        font-size:0.5rem;
                        margin-bottom:0.5rem;
                        width:100%;
                        height:auto;
                        word-wrap:break-word;
                        word-break:break-all;
                    }
                }
            }
            .msg-right {
                /*width:50%;*/
                min-width:26%;
                h4 {
                    font-size:0.8rem;
                }
                ul {
                    li {
                        font-size:0.5rem;
                        list-style: inside;
                        padding:0.05rem;
                        color:#0366D6;
                    }
                }
            }
        }
        .blog-down, .blog-up{
            background: transparent;
            border-width: 0.1rem;
            border-style: solid;
            border-color: transparent #008000 #008000 transparent;
            width: 1rem;
            height: 1rem;
            position:absolute;
            left:50%;
            cursor:pointer;
            outline:0;
        }
        .blog-down {
            transform:rotate(45deg);
            bottom:-1rem;
        }
        .blog-up {
            transform:rotate(-135deg);
            bottom:-1.5rem;

        }
    }

</style>