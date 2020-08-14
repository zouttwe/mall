<template>
  <div class="goods">
    <goods-list-item :key="item.index" v-for="item in goods" :goodsItem="item" class="goods-item"></goods-list-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        dafault(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
