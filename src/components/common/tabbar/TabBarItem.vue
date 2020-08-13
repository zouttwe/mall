<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive" ><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active-icon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>    
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return {
            // isActive:false
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {};
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
  @import "~assets/css/iconfont/iconfont.css";

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    /* line-height: 49px; */
  }

  .tab-bar-item i{
    font-size: 22px;
  }

</style>