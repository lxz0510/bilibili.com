import Vue from 'vue' 
import App from './App.vue'
import VueRouter from 'vue-router'
import register from './views/register.vue'
import loginPage from './views/login.vue'
import userinfo from './views/userinfo.vue'
import home from './views/Home.vue'
import edit from './views/edit.vue'
import article from './views/Article.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import http from '../http.js'
import { Toast } from 'vant'
Vue.prototype.$msg = Toast
Vue.prototype.$http = http
Vue.use(Vant)
Vue.use(VueRouter)

const routes = [
    {path:'/login',component:loginPage},
    { path: '/register', component: register },
    {path:'/userinfo',component:userinfo},
    {path:'/edit',component:edit},
    {path:'/',component:home},
    {path:'/article/:id',component:article}
  ]

const router = new VueRouter({
    routes
})

var vm = new Vue({
    el:"#app",
    render:c =>c(App),
    router
})