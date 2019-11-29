<style lang='stylus'>
@import '../../common/stylus/mixin'
.detailWrapper 
    position fixed
    left 0
    top 0
    bottom 48px
    width 100%
    background white
    transition all 0.4s ease
    .foodDetail
        .back
            position absolute
            color red
            top 12px
            left 6px
            font-size 20px
            padding 10px
</style>

<template>
    <transition name="move">
        <div class="detailWrapper" v-show="showDetail">
            <div class="foodDetail">
                <div class="back" @click="showToggle()">
                    返回
                </div>
            </div>
        </div>
    </transition>
    
</template>

<script>
import BScroll from 'better-scroll'

export default {
    props:{
        food:Object
    },
    data(){
        return{
            showDetail:false
        }
    },
    methods:{
        showToggle(){
            this.showDetail = !this.showDetail
        }
    }
}
</script>