<template>
  <div class="home">
    <Header/>
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
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    Header, HomeSwiper, HomeIcons, Recommend, Weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
      ...mapState(['city'])
  },
  methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.city).then(res => this.getHomeInfoSucc(res))
      },
      getHomeInfoSucc (res) {
        const resData = res.data
        if(resData.ret && resData.data) {
          const data = resData.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.city !== this.lastCity) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>