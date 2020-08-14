<template>
    <div class="content">
    <ul>
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
    // 组件创建完成就调用，document还没
    create(){
        
    },
    mounted(){
        // console.log(this.$refs.aaa)
        // console.log(document.querySelector('.wrapper'))
        this.scroll = new BScroll(document.querySelector('.content'),{

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