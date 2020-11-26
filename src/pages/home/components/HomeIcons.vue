<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(pageItem, index) of pages" :key="index" >
        <div class="icon-items" v-for="item of pageItem" :key="item.id">
          <div class="icon-img">
            <img class="top-img" :src="item.iconUrl" alt="">
          </div>
          <span class="icon-desc">{{item.title}}</span>
        </div>
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination" ></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  setup (props) {
    const swiperOption = {
              pagination: '.swiper-pagination',
              loop: true,
              autoplay: false
          }
    const pages = computed(() => {
      const pages = []
      props.iconList.forEach((item, index) => {
          const page = Math.floor(index / 10)
          if(!pages[page]) {
              pages[page] = []
          }
          pages[page].push(item)
      })
      return pages
    })
    const showSwiper = computed(() => {
      return props.iconList.length
    })
    return {swiperOption, pages, showSwiper}
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 48%
  .icons
    margin-top .2rem
    margin-bottom -.2rem
    .icon-items 
      position relative
      overflow hidden
      float left
      height 0
      width 20%
      padding-bottom 19.63%
      font-size .26rem
      box-sizing border-box
      .icon-img
        position absolute
        left 0
        top 0
        right 0
        bottom .44rem
        padding .1rem
        .top-img
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>