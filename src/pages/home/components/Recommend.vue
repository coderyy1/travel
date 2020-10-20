<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="more">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
      return {
         recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/ad/adc09bb2c41b9f71a3.water.jpg_200x200_87b3da1d.jpg',
        title: '香山公园',
        desc: '坐上开往春天的地铁，体验香山的美'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/4a/4a2a2afc7a3ca8a6a3.water.jpg_200x200_4b55a911.jpg',
        title: '古北水镇',
        desc: '体验水镇的美'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2010/ea/ea45e52a4e22851ca3.img.jpg_200x200_df8ffdaf.jpg',
        title: '北京欢乐谷',
        desc: '亚洲唯一飞行式过山车等你来挑战'
      }]
      }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    overflow hidden
    .item-img
      width 1.4rem
      height 1.4rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .info-title
        line-height .54rem
        font-size .36rem
        ellipsis()
      .info-desc
        line-height .4rem
        margin-left .04rem
        color #ccc
        ellipsis()
      .item-button
        background-color #ff9300
        margin-top .12rem
        padding 0 .16rem
        border-radius .06rem
        font-size .16rem
        color #fff
  .more
    height .8rem
    line-height .8rem
    text-align center
    color $bgColor
    font-size .32rem
</style>