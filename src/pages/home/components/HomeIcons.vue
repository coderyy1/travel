<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageItem, index) of pages" :key="index" >
        <div class="icon-items" v-for="item of pageItem" :key="item.id">
        <div class="icon-img">
          <img class="top-img" :src="item.iconUrl" alt="">
        </div>
        <span class="icon-desc">{{item.title}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
      return {
          iconList: [
              {
                  id: '0001',
                  title: '酒店',
                  iconUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png'
              },
              {
                  id: '0002',
                  title: '机票',
                  iconUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png'
              },
              {
                  id: '0003',
                  title: '火车票',
                  iconUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png'
              },
              {
                  id: '0004',
                  title: '度假',
                  iconUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png'
              },
              {
                  id: '0005',
                  title: '景点门票',
                  iconUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png'
              },
              {
                  id: '0006',
                  title: '海外酒店',
                  iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'
              },
              {
                  id: '0007',
                  title: '低价机票',
                  iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'
              },
              {
                  id: '0008',
                  title: '汽车票船票',
                  iconUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'
              },
              {
                  id: '0009',
                  title: '汽车票船票',
                  iconUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'
              },
              {
                  id: '0010',
                  title: '攻略',
                  iconUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png'
              },
              {
                  id: '0011',
                  title: '民宿客栈',
                  iconUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png'
              },
              {
                  id: '0012',
                  title: '专车自驾',
                  iconUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png'
              },
              {
                  id: '0013',
                  title: '信用卡',
                  iconUrl: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png'
              },
              {
                  id: '0014',
                  title: '旅游团购',
                  iconUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png'
              },
              {
                  id: '0015',
                  title: '一日游',
                  iconUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png'
              },
              {
                  id: '0016',
                  title: '特惠酒店',
                  iconUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png'
              },
              {
                  id: '0017',
                  title: '借钱',
                  iconUrl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png'
              },
              {
                  id: '0018',
                  title: '白金卡',
                  iconUrl: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png'
              },
              {
                  id: '0019',
                  title: '行程设计',
                  iconUrl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png'
              },
              {
                  id: '0020',
                  title: '周边短途',
                  iconUrl: 'https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png'
              }
          ],
          swiperOption: {
              loop: true,
              autoplay: false
          }
      }
  },
  computed: {
      pages () {
          const pages = []
          this.iconList.forEach((item, index) => {
              const page = Math.floor(index / 10)
              if(!pages[page]) {
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 78.52%
  .icons
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