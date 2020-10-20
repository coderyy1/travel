<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption">
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
          },
          swiperList: [{
            id: '0001',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
          },
          {
            id: '0002',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/56ad7891af78b372fbe9dac94cb0ce54.jpeg'
          },{
            id: '0003',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
          },{
            id: '0004',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg'
          },
          {
            id: '0005',
            imgUrl: '//imgs.qunarzz.com/vs_ceph_vcimg/7176acd77332a433af9636eb9a2c338c.jpeg'
          }]
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