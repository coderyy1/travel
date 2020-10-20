<template>
  <div class="home">
    <Header/>
    <home-swiper></home-swiper>
    <home-icons/>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'

export default {
  name: 'Home',
  components: {
    Header, HomeSwiper, HomeIcons
  }
}
</script>

<style scoped>

</style>