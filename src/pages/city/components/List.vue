<template>
  <div class="list" ref="scroll">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button active">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" 
            v-for="itemCity of item" 
            :key="itemCity.id"
          >
              {{itemCity.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'List',
  props: {
    city: {
      type: String,
      default () {
        return ''
      }
    },
    hotCities: {
      type: Array,
      default () {
        return []
      }
    },
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true
      })
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .active
    color $bgColor
    border-color $bgColor !important
  .list
    position absolute
    left 0
    right 0
    bottom 0
    top 1.6rem
    overflow hidden
    .area
      background-color #fff
      .title
        line-height .5rem
        background-color #eee
        padding-left .4rem
      .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
          float left
          width 33.33%
          .button
            margin .1rem
            padding .14rem 0
            text-align center
            border .02rem solid #ccc
            border-radius .08rem
      .item-list
        .item
          padding .2rem .6rem .2rem .16rem
          background-color #fff
          border-bottom .02rem solid #ccc
</style>