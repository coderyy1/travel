<template>
  <div>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg" alt="" @click="gallaryClick">
      <div class="banner-info">
        <div class="info-num">
          <span class="iconfont">&#xe8ba;</span>54
        </div>
        <div class="info-title">颐和园(AAAAA景区)</div>
      </div>
      <div class="back" @click="backClick">
        <div class="iconfont">&#xe624;</div>
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
      imgs: ['http://img1.qunarzz.com/sight/p0/1910/21/2155967acb775f3ba3.img.jpg_350x240_84585846.jpg',
        'http://img1.qunarzz.com/sight/p0/1905/25/25f5e945d9a1f6f7a3.img.jpg_350x240_5be71252.jpg',
        'http://img1.qunarzz.com/sight/p0/1905/66/660b9dce786c0c1ba3.img.jpg_350x240_e822b8b4.jpg',
        'http://img1.qunarzz.com/sight/p0/1905/d9/d999507dea6468e0a3.img.jpg_350x240_bd98e6d6.jpg'],
      showGallary: false
    }
  },
  components: {
    Gallary
  },
  methods: {
    backClick () {
      this.$router.push('/')
    },
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
    .back
      position absolute
      left .2rem
      top .2rem
      width .84rem
      line-height .84rem
      text-align center
      color #fff
      background-color rgba(10, 10, 10, .6)
      border-radius 50%
</style>