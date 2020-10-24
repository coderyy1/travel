<template>
  <div class="detail">
    <Banner/>
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


export default {
  name: 'Detail',
  components: {
    Banner, DetailHeader, DetailList
  },
  data () {
    return {
      list: [
        {title: '成人票', children: [{title: '成人三馆连票', children: [{title: '成人三馆——1'}]}, {title: '成人五馆连票'}]},
        {title: '学生票', children: [{title: '学生三馆连票'}, {title: '学生五馆连票'}]},
        {title: '儿童票', children: [{title: '儿童三馆连票'}, {title: '儿童五馆连票'}]},
        {title: '特惠票', children: [{title: '特惠三馆连票'}, {title: '成人五馆连票'}]},
        {title: '儿童票', children: [{title: '儿童三馆连票'}, {title: '儿童五馆连票'}]},
        {title: '特惠票', children: [{title: '特惠三馆连票'}, {title: '成人五馆连票'}]},
        {title: '儿童票', children: [{title: '儿童三馆连票'}, {title: '儿童五馆连票'}]},
        {title: '特惠票', children: [{title: '特惠三馆连票'}, {title: '成人五馆连票'}]}
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>