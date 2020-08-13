<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <home-pop></home-pop>
        <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

        <ul>
            <li>2</li>
            <li>323</li>
            <li>32</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>2</li>
            <li>323</li>
            <li>32</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>2</li>
            <li>323</li>
            <li>32</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>2</li>
            <li>323</li>
            <li>32</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
            <li>323</li>
        </ul>
   </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomePop from './childComps/HomePop'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata} from '../../network/home.js'

export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        HomePop,
        TabControl
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            }
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
    .tab-control{
        position: sticky;
        top: 44px;
    }
</style>