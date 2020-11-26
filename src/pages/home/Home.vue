<template>
  <div class="home">
    <Header/>
    <home-swiper :swiperList="data.swiperList"/>
    <home-icons :iconList="data.iconList"/>
    <recommend :recommendList="data.recommendList"/>
    <weekend :weekendList="data.weekendList"/>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
import {useStore} from 'vuex'

import {reactive, computed, onMounted} from 'vue'

export default {
  name: 'Home',
  components: {
    Header, HomeSwiper, HomeIcons, Recommend, Weekend
  },
  setup() {
    // 定义data
    const data = reactive({
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    })
    // 使用vuex
    const store = useStore();
    // 定义computed
    const city = computed(() => {
      return store.state.city
    }) 
    // 定义方法
    async function getHomeInfo () {
        let res = await axios.get('/api/index.json?city=' + city.value)
        const resData = res.data
        if(resData.ret && resData.data) {
          const resultData = resData.data
          data.swiperList = resultData.swiperList
          data.iconList = resultData.iconList
          data.recommendList = resultData.recommendList
          data.weekendList = resultData.weekendList
        }
      }
    onMounted( () => {
      getHomeInfo()
    })
    return {data}
  }

}
</script>

<style scoped>

</style>