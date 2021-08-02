import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
    }, {
        path: '/signup',
        name: 'Signup',
        component: () =>
            import ('../views/Signup.vue')
    },
    {
        path: '/',
        alias: '/posts',
        name: 'Posts',
        component: () =>
            import ('../views/Posts.vue')
    },
    {
        path: '/posts/:id',
        name: 'One-post',
        component: () =>
            import ('../views/One-post.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () =>
            import ('../views/Logout.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router