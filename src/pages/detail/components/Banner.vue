<template>
  <div>
    <div class="banner">
      <img class="banner-img" :src="info.bannerImg" @click="gallaryClick">
      <div class="banner-info">
        <div class="info-num">
          <span class="iconfont">&#xe8ba;</span>{{imgs.length}}
        </div>
        <div class="info-title">{{info.sightName}}</div>
      </div>
    </div>
    <Gallary :imgs="imgs" v-show="showGallary" @close="closeGallary"/>
  </div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary'

export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    info: {
      type: Object,
      default () {
        return {}
      }
    },
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Gallary
  },
  methods: {
    gallaryClick () {
      this.showGallary = true
    },
    closeGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner 
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      bottom .24rem
      left .2rem
      font-size .36rem
      color #fff
      .info-num
        width 1.2rem
        line-height .48rem
        margin-bottom .2rem
        text-align center
        font-size .24rem
        background-color rgba(10, 10, 10, .7)
        border-radius .12rem
      .iconfont
        font-size .24rem
        margin-right .08rem
    
</style>