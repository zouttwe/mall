<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <i class="iconfont" slot="item-icon">&#xe636;</i>
        <i class="iconfont" slot="item-active-icon">&#xe635;</i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i class="iconfont" slot="item-icon">&#xe64f;</i>
        <i class="iconfont" slot="item-active-icon">&#xe63a;</i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <i class="iconfont" slot="item-icon">&#xe63b;</i>
        <i class="iconfont" slot="item-active-icon">&#xe63c;</i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i class="iconfont" slot="item-icon">&#xe64d;</i>
        <i class="iconfont" slot="item-active-icon">&#xe64e;</i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
  }
}
</script>

<style scoped>

</style>