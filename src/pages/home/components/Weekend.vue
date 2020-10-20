<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 37.11%
      .item-img
        width 100%
    .item-info
      padding .1rem
      min-width 0
      .info-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .info-desc
        line-height .4rem
        margin-left .04rem
        color #777
        ellipsis()
  .more
    height .8rem
    line-height .8rem
    text-align center
    color $bgColor
    font-size .32rem
</style>