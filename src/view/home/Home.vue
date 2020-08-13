<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <home-pop></home-pop>

        
   </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomePop from './childComps/HomePop'

import {getHomeMultidata} from '../../network/home.js'

export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        HomePop
    },
    data(){
        return{
            banners:[],
            recommends:[]
        }
    },
    created(){
        // 1.请求多个数据
        getHomeMultidata().then(res =>{
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
        })
    }
}
</script>

<style>
    #home{
        padding-top: 44px;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
</style>