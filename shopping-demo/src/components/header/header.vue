<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64"/>
            </div>
            <div class="content">
                    <div class="title">
                        <span class="brand"></span>
                        <span class="name">{{seller.name}}</span>
                    </div>
                    <div class="description">
                        {{seller.description + ' / ' + seller.deliveryTime + '分钟送达'}}
                    </div>
                    <div class="supports">
                        <div class="supports_desc">
                            <span class="icon"></span>
                            <span class="text">{{seller.supports[0].description}}</span>
                        </div>
                    </div>
            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetails()">
                <span class="count">{{seller.supports.length+'个'}}</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>

         <div class="bulletin-wrapper" @click="showDetails()">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%"/>
        </div>

        <transition name="fade">
            <div v-if="detailShow" class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star-wrapper">
                            <star :size="48" :score="seller.score"></star>
                        </div>
                    </div>
                </div>
            </div>

        </transition>
    </div>
</template>

<script>
import star from '../start/start'


export default {
    props:{
        seller: {
          type: Object
        }
    },
     created() {
        this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    data(){
        return {
            detailShow:false
        }
    },
    components:{
        star
    },

    methods: {
         showDetails() {
            this.detailShow = true;
        },
        hideDetail() {
            this.detailShow = false;
        }
    }
}
</script>

<style >
    .header{
        position: relative;
        background: rgba(7,17,27,0.2);
        color: #fff;
        overflow: hidden;
    }
    .header .content-wrapper {
        position: relative;
        display: flex;
        padding: 20px 12px 18px 24px;
        font-size:12px;
    }

    .header .content-wrapper .avatar img {
        border-radius: 2px;
         width: 70px;
         height: 70px;
    }

     .header .content-wrapper .content {
         margin-left: 16px;
     }
     .header .content-wrapper .content .title {
         margin: 2px 0 8px 0;
         font-size: 16px;
     }
     .content-wrapper .content .title .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          background-image:url('./img/brand@2x.png');
          background-size: 30px 18px;
          background-repeat: no-repeat;
     }

     .content-wrapper .content .title .name{
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
     }

     .content-wrapper .content .description {
          font-size: 12px;
          margin-bottom: 8px
     }

     .content-wrapper .content .supports .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            margin-top: 2px;
            background-image:url('./img/decrease_1@2x.png');
            background-size: 12px 12px;
            background-repeat: no-repeat;
           

     }
     .content-wrapper .content .supports .text {
            line-height: 12px;
            font-size: 10px;
     }

     .content-wrapper .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0,0,0,0.2);
        text-align: center;
     }
     .content-wrapper .support-count .count {
         vertical-align: top;
         font-size: 10px;
     }

     .content-wrapper .support-count .icon-keyboard_arrow_right {
        font-size: 10px;
        margin-left: 2px;
        line-height: 24px;
     }
     .bulletin-wrapper {
        position: relative;
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: rgba(7,17,27,0.2)
     }
     .bulletin-wrapper .bulletin-title {
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        background-image: url('./img/bulletin@2x.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
     }
     .bulletin-wrapper .bulletin-text {
        font-size: 10px;
        vertical-align: middle;
        margin: 0 4px;
     }
     .bulletin-wrapper .icon-keyboard_arrow_right {
        position: absolute;
        font-size: 10px;
        right: 12px;
        top: 8px;
     }
     .header .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
     }

     .detail {
         position: fixed;
         top: 0;
         left: 0;
         z-index: 100;
         width: 100%;
         height: 100%;
         background: rgba(7,17,27,0.8);
     }

     .detail-wrapper {
        min-height: 100%;
        width: 100%
     }
     .detail-wrapper .detail-main{
         margin-top: 64px;
         height: 64px;
     }
    
    
</style>