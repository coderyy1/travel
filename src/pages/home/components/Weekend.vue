<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
      return {
         weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '温泉有水上乐园',
        desc: '泡泡温泉，吹吹海风，深觉人生美好'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
        title: '登高望远秋色佳',
        desc: '山顶满眼彩色，此情此景醉了'
      }]
      }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .recommend-title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%
      .item-img
        width 100%
    .item-info
      padding .1rem
      min-width 0
      .info-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .info-desc
        line-height .4rem
        margin-left .04rem
        color #777
        ellipsis()
  .more
    height .8rem
    line-height .8rem
    text-align center
    color $bgColor
    font-size .32rem
</style>