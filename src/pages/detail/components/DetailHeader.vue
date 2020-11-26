<template>
  <div>
    <div 
      class="header-abs back" 
      @click="backClick" 
      v-show="data.isShow"
    >
      <div class="iconfont">&#xe624;</div>
    </div>
    <div 
      class="header-fixed" 
      v-show="!data.isShow" 
      :style="data.opacityStyle"
    >
      <div class="fixed-left iconfont" @click="backClick">&#xe624;</div>
      详情页面
    </div>
  </div>
</template>

<script>
import { onActivated, onDeactivated, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'DetailHeader',
  setup(props, context) {
    const data = reactive({
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    })
    const router = useRouter()

    function backClick () {
      router.push('/')
    }

    function handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top >= 48) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1: opacity
        data.opacityStyle = { opacity }
        data.isShow = false
      }else {
        data.isShow = true
      }
    }

    onActivated(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onDeactivated(() => {
    window.removeEventListener('scroll', handleScroll)
    })
    return { data, backClick }
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