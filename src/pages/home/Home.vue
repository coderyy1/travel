<template>
  <div class="home">
    <Header :city="city"/>
    <home-swiper :swiperList="swiperList"/>
    <home-icons :iconList="iconList"/>
    <recommend :recommendList="recommendList"/>
    <weekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Header, HomeSwiper, HomeIcons, Recommend, Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
      getHomeInfo () {
        axios.get('/api/index.json').then(res => this.getHomeInfoSucc(res))
      },
      getHomeInfoSucc (res) {
        const resData = res.data
        if(resData.ret && resData.data) {
          const data = resData.data
          this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
  },mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>