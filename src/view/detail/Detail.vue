<template>
    <div id="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shopInfo"></detail-shop-info>
        <!-- <detail-goods-info :detail-info="detailInfo"></detail-goods-info> -->
        <detail-params-info :item-params="itemParams"></detail-params-info>
        <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
        <goods-list :goods="recommendInfo"></goods-list>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamsInfo from './childComps/DetailParamsInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'

    import GoodsList from 'components/content/goods/GoodsList'

    import {getDetail,getRecommend,Goods} from '../../network/detail'
    
    export default {
        name:'Detail',
        data(){
            return {
                iid:null,
                topImages:[],
                goods:{},
                shopInfo:{},
                detailInfo:{},
                itemParams:{},
                commentInfo:{},
                recommendInfo:[]
            }
        },
        components:{
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamsInfo,
            DetailCommentInfo,
            GoodsList
        },
        created(){
            // console.log(this.$route.params.id)
            // 保存传入的id
            this.iid = this.$route.params.id

            // 根据iid请求详情数据
            getDetail(this.iid).then(res=>{
                const data = res.data.result
                console.log(data)
                // 1.获取顶部的图片轮播数据
                this.topImages = data.itemInfo.topImages

                // 2.获取商品信息
                this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

                // 3.创建店铺信息的对象
                this.shopInfo = data.shopInfo

                // 4.取出详情信息
                this.detailInfo = data.detailInfo

                // 5.取出参数信息
                this.itemParams = data.itemParams

                // 6.取出评论信息
                if(data.rate.cRate != 0)
                {
                    this.commentInfo = data.rate.list[0]
                }
            })

            // 请求推荐数据
            getRecommend().then(res=>{
                this.recommendInfo = res.data.list
            })
        }
    }
</script>

<style scoped>

</style>