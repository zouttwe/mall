<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
        <tab-control :titles="['流行','新款','精选']"
                @tabClick="tabClick" 
                ref="tabControl1"
                class="tab-control" v-show="isTabFixed"></tab-control>
        <scroll class="content" ref="scroll" 
            :probe-type='3' 
            @scroll='contentScroll'
            :pull-up-load="true"
            @pullingup='loadMore'>
            <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad'></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <home-pop></home-pop>
            <tab-control :titles="['流行','新款','精选']"
                @tabClick="tabClick" 
                ref="tabControl2"></tab-control>
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

import {getHomeMultidata, getHomeGoods} from '../../network/home.js'
import {debounce} from '../../common/utils.js'

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
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentRecommend].list
        }
    },
    // destroyed(){
    //     console.log("home destroyed")
    // },
    // activated(){
    //     console.log('activated')
    // },
    // deactivated(){
    //     console.log('deactives')
    // },
    created(){
        // 1.请求多个数据
        this.getHomeMultidatac()

        // 2.请求商品数据
        this.getHomeGoodsc('pop')
        this.getHomeGoodsc('new')
        this.getHomeGoodsc('sell')
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh)
        // 监听item中图片加载完成
        this.$bus.$on('itemImageLoad',()=>{
            // 正常情况下会执行三十次，要进行防抖函数处理
            // 可以将refresh函数传入到debounce函数中形成一个新的函数
            refresh();
        })  
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
                this.goods[type].page += 1;

                // 上拉加载更多的实现
                this.$refs.scroll.finishPullUp();
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
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
        },
        backClick(){
            // 坐标和过程时间
            this.$refs.scroll.scrollTo(0,0);
        },
        contentScroll(position){    
            // 1.判断backtop是否显示
            this.isShowBackTop= (-position.y)>1000;

            // 2.决定tabcontrol是否吸顶
            this.isTabFixed = (-position.y)>this.tabOffsetTop
        },
        loadMore(){
            this.getHomeGoodsc(this.currentRecommend);
        },
        swiperImageLoad(){
            // 获取tabControl的offsetTop
            // 所有组件都有一个$el属性，用于获取组件中的元素
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        }
    }
}
</script>

<style scoped>
    #home{
        /* padding-top: 44px; */
        height:100vh;
        position: relative;
    }
    .tab-control{
        position: sticky;
        top: 44px;
        z-index: 9;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        /* 在使用浏览器原生滚动时使用 */
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
    }
    /* .fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
    } */
</style>