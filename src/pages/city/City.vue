<template>
  <div class="city">
    <city-header :cities="data.cities"  @isfocus="tof" @isblur="tot"/>
    <list 
      :hot-cities="data.hotCities" 
      :cities="data.cities"
      :keyVal="keyOfRightList"/>
    <right-list :cities="data.cities" @change="changeTo" v-show="showRight"/>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import List from './components/List'
import RightList from './components/RightList'
import axios from 'axios'

import {reactive, ref, onMounted} from 'vue'

export default {
  name: 'City',
  components: {
      CityHeader, List, RightList
  },
  setup() {
    const { keyOfRightList, changeTo } = useLetterLogic()
    const { showRight, tof, tot } = useShowRightLogic()
    const { data } = useCityLogic()
    return {data, keyOfRightList, showRight, changeTo, tof, tot}
  }
}

  // 城市相关
  function useCityLogic () {
    const data = reactive({
      hotCities: [],
      cities: {}
    })

    async function getCityData () {
          let res = await axios.get('/api/city.json')
          const resData = res.data
          if(resData.ret && resData.data) {
            const result = resData.data
            data.hotCities = result.hotCities
            data.cities = result.cities
          }
    }

    onMounted(() => {
      getCityData()
    })
    return { data }
  }

  // 点击侧边栏相关
  function useLetterLogic () {
    const keyOfRightList = ref('A')

    function changeTo (e) {
      keyOfRightList.value = e
    }
    return { keyOfRightList, changeTo }
  }


  // 是否显示侧边栏相关
  function useShowRightLogic () {
    const showRight = ref(true)

    function tof () {
      showRight.value = false
    }

    function tot () {
      showRight.value = true
    }
    return { showRight, tof, tot }

  }
</script>

<style lang="stylus" scoped>

</style>