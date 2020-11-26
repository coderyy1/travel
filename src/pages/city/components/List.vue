<template>
  <div class="list" ref="wrapper">
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
          <div 
            class="button-wrapper" 
            v-for="item of hotCities" 
            :key="item.id"
            @click="citySelect(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div 
        class="area" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="elem => elems[key] = elem"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div 
            class="item border-bottom" 
            v-for="itemCity of item" 
            :key="itemCity.id"
            @click="citySelect(itemCity.name)"
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
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'List',
  props: {
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
    },
    keyVal: {
      type: String,
      default: 'A'
    }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const elems = ref([])
    const wrapper = ref(null)
    let scroll = null
    const city = store.state.city
    function citySelect (name) {
      store.commit('change_city', name)
      router.push('/')
    }
    watch(() => props.keyVal, (keyVal, preKeyVal) => {
        const el = elems.value[keyVal]
        scroll.scrollToElement(el)
    })
    onMounted(() => {
    setTimeout(() => {
      scroll = new BScroll(wrapper.value, {
        click: true
      })
    }, 500)
    })
    return { elems, wrapper, city, citySelect }
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