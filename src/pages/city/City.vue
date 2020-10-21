<template>
  <div class="city">
    <city-header/>
    <list :city="city" :hot-cities="hotCities" :cities="cities"/>
    <right-list/>
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
        city: '',
        hotCities: [],
        cities: {}
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
            this.city = data.city
            this.hotCities = data.hotCities
            this.cities = data.cities
          }
      }
  },
  mounted () {
      this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>

</style>