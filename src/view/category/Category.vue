<template>
    <div class="content">
    <ul>
        <button @click="btnClick()">按钮</button>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuha</li>
        <li>fenleifuhaend</li>
    </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import BScroll from 'better-scroll'

export default {
    name:'Category',
    components:{
        NavBar
    },
    data(){
        return{
            scroll:null
        }
    },
    methods:{
        btnClick(){
            console.log('btnClick')
        }
    },
    // 组件创建完成就调用，document还没
    create(){
        
    },
    mounted(){
        // console.log(this.$refs.aaa)
        // console.log(document.querySelector('.wrapper'))

        // probe侦测
        // 0 、1：都是不侦测实时的位置
        // 2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
        // 3：只要滚动，就会进行侦测
        this.scroll = new BScroll(document.querySelector('.content'),{
            probeType:3,
            // 想要上拉加载更多的话，调用pullUpLoad属性
            pullUpLoad:true
            // 想让内部的元素可以点击的话，调用click属性
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
        })
        this.scroll.on('pullingUp',()=>{
            console.log("上拉加载更多");
        })
    }
}
</script>

<style>
    .category-nav{
        background-color: white;
        color: black;
    }
    .content{
        height: 150px;
        background-color: rosybrown; 
        overflow: hidden;
        /* 超出部分自动隐藏，可局部滚动 */
        /* overflow: auto; */
    }
</style>