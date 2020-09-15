<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        // 创建一个BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            // click为false时（默认），除了button其他的监听都不能实现
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        // 监听滚动的位置
        if(this.probeType === 2 || this.probeType == 3)
        {
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
        }
        // 监听scroll滚动到底部
        if (this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingup')
            })
        }
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time);
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
        },
        refresh(){
            this.scroll && this.scroll.refresh();
        }
    }
}
</script>

<style scoped>

</style>