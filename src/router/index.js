import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('../view/home/Home')
const Category = ()=>import('../view/category/Category')
const Cart = ()=>import('../view/cart/Cart')
const Profile = ()=>import('../view/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/cart',
        component:Cart
      },
      {
        path:'/profile',
        component:Profile
      }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router