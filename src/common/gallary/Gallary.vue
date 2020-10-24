<template>
  <div class="container" @click="closeGallary">
    <div class="wrapper">
      <swiper class="swiper" :options="swiperOption" >
      <!-- slides -->
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
      <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents: true,
            observer: true
          }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    closeGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-pagination
    bottom -2.8rem
    color #fff
  .container >>> .swiper-container
    overflow inherit
    background-color #000
    border none
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    background #000
    z-index 99
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .swiper-img
        width 100%
        
</style>