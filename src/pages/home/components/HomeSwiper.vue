<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
      <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
      return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop: true,
            autoplay: 3000,
            autoplayDisableOnInteraction : false
          }
      }
  },
  props: {
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
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