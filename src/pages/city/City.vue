<template>
  <div class="city">
    <city-header :cities="cities"/>
    <list 
      :hot-cities="hotCities" 
      :cities="cities"
      :keyVal="keyOfRightList"/>
    <right-list :cities="cities" @change="changeTo"/>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import List from './components/List'
import RightList from './components/RightList'
import axios from 'axios'

export default {
  name: 'City',
  components: {
      CityHeader, List, RightList
  },
  data () {
    return {
        hotCities: [],
        cities: {},
        keyOfRightList: 'A'
    }
  },
  methods: {
      getCityData () {
          axios.get('/api/city.json').then(res => {
              this.getCityDataSucc(res)
          })
      },
      getCityDataSucc (res) {
          const resData = res.data
          if(resData.ret && resData.data) {
            const data = resData.data
            this.hotCities = data.hotCities
            this.cities = data.cities
          }
      },
      changeTo (e) {
          this.keyOfRightList = e
      }
  },
  mounted () {
      this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>

</style>