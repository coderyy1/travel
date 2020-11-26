<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
      <!-- Optional controls -->
        <template v-slot:pagination>
          <div class="swiper-pagination" ></div>
        </template>
      </swiper>
    </div>
  </div>
  
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup(props) {
    const swiperOption = {
      pagination: '.swiper-pagination',
      loop: true,
      autoplay: 3000,
      autoplayDisableOnInteraction : false
    }
    const showSwiper = computed(() => {
      return props.swiperList.length
    })

    return {swiperOption, showSwiper}
  }
}
</script>

<style lang='stylus' scoped>
// 穿透
  .wrapper >>> .swiper-pagination-bullet-active 
    background-color #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30.47%
    background-color #eee
    .swiper-img
      width 100%
</style>