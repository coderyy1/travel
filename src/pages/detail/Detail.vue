<template>
  <div class="detail">
    <Banner :info="data.bannerInfo" :imgs="data.grallaryInfo"/>
    <detail-header/>
    <div class="content">
      <detail-list :list="data.list"/>
    </div>
    <div class="bott"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/List'
import axios from 'axios'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'


export default {
  name: 'Detail',
  components: {
    Banner, DetailHeader, DetailList
  },
  setup() {
    const data = reactive({
      bannerInfo: {},
      grallaryInfo: [],
      list: []
    })
    const route = useRoute()

    async function getDetailData () {
      let res = await axios.get('/api/detail.json', {
        params: {id: route.params.id}
      })
      const resData = res.data
      if(resData.ret && resData.data) {
        const result = resData.data
        data.bannerInfo.sightName = result.sightName
        data.bannerInfo.bannerImg = result.bannerImg
        data.grallaryInfo = result.gallaryImgs
        data.list = result.categoryList
      }
    }

    getDetailData()

    return { data }
  }
}
</script>

<style lang='stylus' scoped>
  .bott {
    padding-bottom 20rem
  }
</style>