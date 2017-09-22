import Vue from "vue"
import App from "./App.vue"
import axios from "axios"
import router from "./router/index.js"

Vue.prototype.$axios = axios;
new Vue({
    el:"#app",
    template:"<App/>",
    router,
    components:{
        App:App
    }
})


