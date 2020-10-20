<template>
  <div class="city-header">
    <div class="header-top">
      <div class="top-left">
        <router-link to="/">
          <div class="iconfont">&#xe624;</div>
        </router-link>
      </div>
      <div class="top-center">选择城市</div>
    </div>
    <div class="header-bottom">
      <input class="city-input" type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .city-header
    width 100%
    height 1.6rem
    background-color $bgColor
    .header-top
      position relative
      display flex
      height .8rem
      line-height .8rem
      box-sizing border-box
      .top-center
        width 100%
        color #fff
        text-align center
      .top-left
        position absolute
        width .8rem
        text-align center
        float left
        color #fff
        .iconfont
          color #fff
    .header-bottom
      position relative
      height .8rem
      line-height .8rem
      box-sizing border-box
      .city-input
        box-sizing border-box
        width 8rem
        height .6rem
        margin .01rem .15rem .2rem .15rem
        border-radius .08rem
        text-align center
        line-height .6rem
        color #666
        padding 0 .1rem
</style>