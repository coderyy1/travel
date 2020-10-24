<template>
  <div class="detail">
    <Banner :info="bannerInfo" :imgs="grallaryInfo"/>
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/List'
import axios from 'axios'


export default {
  name: 'Detail',
  components: {
    Banner, DetailHeader, DetailList
  },
  data () {
    return {
      bannerInfo: {},
      grallaryInfo: [],
      list: []
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json').then(res => this.getDetailDataSucc(res))
    },
    getDetailDataSucc (res) {
      const resData = res.data
      if(resData.ret && resData.data) {
        const data = resData.data
        this.bannerInfo.sightName = data.sightName
        this.bannerInfo.bannerImg = data.bannerImg
        this.grallaryInfo = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  created () {
    this.getDetailData()
  }
}
</script>

<style lang='stylus' scoped>

</style>