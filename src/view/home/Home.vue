<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <home-pop></home-pop>
        <tab-control class="tab-control" :titles="['流行','新款','精选']"
            @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>

   </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomePop from './childComps/HomePop'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'


import {getHomeMultidata} from '../../network/home.js'
import {getHomeGoods} from '../../network/home.js'

export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        HomePop,
        TabControl,
        GoodsList
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentRecommend:'pop'
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentRecommend].list
        }
    },
    created(){
        // 1.请求多个数据
        this.getHomeMultidatac()

        // 2.请求商品数据
        this.getHomeGoodsc('pop')
        this.getHomeGoodsc('new')
        this.getHomeGoodsc('sell')
    },
    methods:{
        // 网络请求
        getHomeMultidatac(){
            getHomeMultidata().then(res =>{
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            })
        },
        getHomeGoodsc(type){
            const page = this.goods[type].page+1;
            getHomeGoods(type,page).then(res =>{
                // console.log(res)
                this.goods[type].list.push(...res.data.data.list);
                this.goods[type].list.page += 1;
            })
        },

        // 事件监听
        tabClick(index){
            if(index == 0){
                this.currentRecommend = 'pop'
            }
            else if(index == 1){
                this.currentRecommend = 'new'
            }
            else{
                this.currentRecommend = 'sell'
            }
        }
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
        z-index:1;
    }
</style>