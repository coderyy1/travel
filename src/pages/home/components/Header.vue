<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-content">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

  .header
    display flex
    height .86rem
    line-height .86rem
    background-color $bgColor
    color #fff
    .header-left 
      width .64rem
      float left
      text-align center
    .header-content
      flex 1
      height .62rem
      line-height .62rem
      margin-top .12rem
      margin-left .2rem
      background-color #fff
      color #ccc
      border-radius .1rem
      span 
        margin-left .1rem
    .header-right 
      width 1.28rem
      text-align center
      span 
        margin-left -.06rem
</style>