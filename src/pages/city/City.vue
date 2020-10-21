<template>
  <div class="city">
    <city-header/>
    <list/>
    <right-list/>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import List from './components/List'
import RightList from './components/RightList'

export default {
  name: 'City',
  components: {
      CityHeader, List, RightList
  }
}
</script>

<style lang="stylus" scoped>

</style>