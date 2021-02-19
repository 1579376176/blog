import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import PostBlog from '../views/postBlog.vue'
import BlogDetail from '../views/blogDetail.vue'
import Journal from '../views/journal.vue'
import Content from '../views/content.vue'
import Person from '../views/person.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/content',
        name: Content,
        component: Content
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/person',
        name: Person,
        component: Person
    }, {
        path: '/journal',
        name: 'Journal',
        component: Journal
    },
    {
        path: '/blog/post',
        name: 'PostBlog',
        component: PostBlog
    },
    {
        path: '/blog/detail/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },

]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router