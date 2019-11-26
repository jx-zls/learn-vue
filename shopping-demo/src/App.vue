


<template>
  <div>
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import axios from 'axios'
import datas from './static/data.json'
import header from './components/header/header'
export default {
  data(){
    return {
      seller: datas.seller
    }
  },
  components:{
    'v-header':header,
  }

}
</script>

<style>

</style>
