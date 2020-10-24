<template>
  <div>
    <div 
      class="header-abs back" 
      @click="backClick" 
      v-show="isShow"
    >
      <div class="iconfont">&#xe624;</div>
    </div>
    <div 
      class="header-fixed" 
      v-show="!isShow" 
      :style="opacityStyle"
    >
      <div class="fixed-left iconfont" @click="backClick">&#xe624;</div>
      详情页面
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    backClick () {
      this.$router.push('/')
    },
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top >= 48) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1: opacity
        this.opacityStyle = { opacity }
        this.isShow = false
      }else {
        this.isShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivatedd () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'

  .back
    position absolute
    left .1rem
    top .1rem
    width .72rem
    line-height .72rem
    text-align center
    color #fff
    background-color rgba(10, 10, 10, .6)
    border-radius 50%
  .header-fixed
    position fixed
    left 0
    right 0
    top 0
    width 100%
    line-height .88rem
    font-size .32rem
    text-align center
    color #fff
    background-color $bgColor
    z-index 9
    .fixed-left 
      position absolute
      width .88rem
      float left
      text-align center
</style>