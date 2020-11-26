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
      <input v-model="data.keyWords" class="city-input" type="text" placeholder="输入城市名或拼音" @focus="inputFocus" @blur="inputBlur"/>
    </div>
    <div class="search-content" ref="search" v-show="data.keyWords">
      <ul>
        <li 
          class="search-item border-bottom" 
          v-for="item of data.list"
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { reactive, ref, watch, computed, onMounted, onUpdated, onDeactivated } from 'vue'

export default {
  name: 'CityHeader',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup(props, context) {
    const { data, isShow } = useSearchLogic(props)
    const store = useStore()
    const router = useRouter()
    const search = ref(null)
    let timer2 = null
    let scroll = null

    function citySelect (name) {
      store.commit('change_city', name)
      router.push('/')
    }

    function inputFocus () {
      context.emit('isfocus')
    }    
    
    function inputBlur () {
      context.emit('isblur')
    }

    onMounted(() => {
      scroll = new BScroll(search.value, {
        click: true
      })
    })

    onUpdated(() => {
      if (timer2) {
        clearTimeout(timer2)
      }
      timer2 = setTimeout(() => {
        scroll.refresh()
        scroll.scrollTo(0, 0, 0)
      }, 100)
    })

    onDeactivated(() => {
      data.keyWords = ''
    })

    return { data, search, isShow, citySelect, inputFocus, inputBlur }
  }
  
}

  function useSearchLogic(props) {
    const data = reactive({
      keyWords: '',
      list: []
    })
    let timer1 = null

    const isShow = computed(() => {
      return !data.list.length
    })

    watch(() => data.keyWords, () => {
        if (timer1) {
          clearTimeout(timer1)
        }
        if (!data.keyWords) {
          data.list = []
          return
        }
        timer1 = setTimeout(() => {
          const res = []
          for (let i in props.cities) {
            props.cities[i].forEach(item => {
              if (item.spell.indexOf(data.keyWords) > -1 || item.name.indexOf(data.keyWords) > -1) {
                res.push(item)
              }
            })
          }
          data.list = res
        }, 100)
    })

    return { data, isShow }
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
        width 96%
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