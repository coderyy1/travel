<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="more">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: {
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
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    overflow hidden
    .item-img
      width 1.4rem
      height 1.4rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .info-title
        line-height .54rem
        font-size .36rem
        ellipsis()
      .info-desc
        line-height .4rem
        margin-left .04rem
        color #ccc
        ellipsis()
      .item-button
        background-color #ff9300
        margin-top .12rem
        padding 0 .16rem
        border-radius .06rem
        font-size .16rem
        color #fff
  .more
    height .8rem
    line-height .8rem
    text-align center
    color $bgColor
    font-size .32rem
</style>