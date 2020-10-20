<template>
  <div class="home">
    <Header/>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import Header from './components/Header'
import HomeSwiper from './components/HomeSwiper'

export default {
  name: 'Home',
  components: {
    Header, HomeSwiper
  }
}
</script>

<style scoped>

</style>