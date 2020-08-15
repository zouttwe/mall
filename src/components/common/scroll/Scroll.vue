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
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            // click为false时（默认），除了button其他的监听都不能实现
            click:true,
            probeType:this.probeType
        })
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time);
        }
    }
}
</script>

<style scoped>

</style>