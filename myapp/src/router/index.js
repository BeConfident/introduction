import Vue from "vue"
import Router from "vue-router"
// import Hello from "@/components/Hello.vue"
import Idea from "@/components/Idea/Idea.vue"
/*import Message from "@/components/Message/Message.vue"
import Blog from "@/components/Blog/Blog.vue"
import Books from "@/components/Books/Books.vue"*/
Vue.use(Router)

export default new Router({
    routes:[
        {
          path:"/",
          redirect:"/idea"
        },
        {
            path:"/idea",
            name: 'Idea',
            component: Idea,
            /*children:[
                {
                    path:"message",
                    component:Message
                },
                {
                    path:"blog",
                    component:Blog
                },
                {
                    path:"books",
                    component:Books
                }
            ]*/
        }
    ]
})
