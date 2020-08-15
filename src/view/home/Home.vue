<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>

        <scroll class="content" ref="scroll" :probe-type='3' @scroll='contentScroll'>
            <home-swiper :banners="banners"></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <home-pop></home-pop>
            <tab-control class="tab-control" :titles="['流行','新款','精选']"
                @tabClick="tabClick"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>

        <!-- 组件监听时使用.native修饰符 -->
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
   </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomePop from './childComps/HomePop'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

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
        GoodsList,
        Scroll,
        BackTop
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
            currentRecommend:'pop',
            isShowBackTop:false
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
        },
        backClick(){
            // 坐标和过程时间
            this.$refs.scroll.scrollTo(0,0);
        },
        contentScroll(position){
            if(position.y > -1000)
            {
                this.isShowBackTop=false
            }
            else{
                this.isShowBackTop=true
            }
        }
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
        height:100vh;
        position: relative;
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
        z-index:9;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
    /* .content{
        height:calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
    } */
</style>