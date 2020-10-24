<template>
  <div>
    <div 
      class="item" 
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <list :list="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .4rem
    .item-title-icon
      position relative
      top .04rem
      left .08rem
      display inline-block
      width .32rem
      height .32rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .border-bottom
    &:before
      border-color #ccc
  .item-children
    padding 0 .4rem
</style>