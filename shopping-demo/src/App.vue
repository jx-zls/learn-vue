


<template>
  <div>
    <v-header :seller="data.seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to='/goods'>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <keep-alive>
       <router-view :data="data"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from 'axios'
import datas from './static/data.json'
import header from './components/header/header'
export default {
  data(){
    return {
      data: datas
    }
  },
  components:{
    'v-header':header,
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab 
    display flex
    width 100%
    height 40px
    line-height 40px
    border-width 1px
    border-color rgba(7,17,27,0.1)
    .tab-item 
        flex 1
        text-align center
        a 
         display block
         font-size 14px
         color rgb(77,85,93)
         &.active
           font-size 14px
           color rgb(240,20,20)
           
</style>
