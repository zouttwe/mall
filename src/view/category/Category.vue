<template>
    <div class="category">
        <nav-bar class="category-nav"><div slot="center">分类</div></nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'Category',
    components:{
        NavBar
    }
}
</script>

<style>
    .category-nav{
        background-color: white;
        color: black;
    }
</style>