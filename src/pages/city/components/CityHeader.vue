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
      <input v-model="keyWords" class="city-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyWords">
      <ul>
        <li 
          class="search-item border-bottom" 
          v-for="item of list"
          :key="item.id"
          @click="citySelect (item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item atcenter border-bottom" v-show="isShow">没有找到匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  name: 'CityHeader',
  data () {
    return {
      keyWords: '',
      list: [],
      timer1: null,
      timer2: null
    }
  },
  watch: {
      keyWords () {
        if (this.timer1) {
          clearTimeout(this.timer1)
        }
        if (!this.keyWords) {
          this.list = []
          return
        }
        this.timer1 = setTimeout(() => {
          const res = []
          for (let i in this.cities) {
            this.cities[i].forEach(item => {
              if (item.spell.indexOf(this.keyWords) > -1 || item.name.indexOf(this.keyWords) > -1) {
                res.push(item)
              }
            })
          }
          this.list = res
        }, 100)
      }
  },
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    ...mapMutations({
      changeCity: 'change_city'
    }),
    citySelect (name) {
      this.changeCity(name)
      this.$router.push('/')
    }
  },
  computed: {
    isShow () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  updated () {
    if (this.timer2) {
      clearTimeout(this.timer2)
    }
    this.timer2 = setTimeout(() => {
      this.scroll.refresh()
      this.scroll.scrollTo(0, 0, 0)
    }, 100)
  },
  deactivated () {
    this.keyWords = ''
  }
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
    .search-content
      overflow hidden
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
      background-color #eee
      z-index 99
      .search-item
        line-height .68rem
        padding-left .2rem
        background-color #fff
        color #666
      .atcenter
        text-align center
      .border-bottom
        &:before
          border-color #ccc
</style>