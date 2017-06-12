<template>
  <div class="post">
    <div v-if="loading">loading</div>
    <div v-if="">{{$route.params.id}}</div>
    <detail-activity></detail-activity>
    <div v-if="datas.length > 0">
      <span>请求数据成功</span>
    </div>
    <div v-else-if="datas.length === 0">暂无数据</div>
    <div v-if="error">请求失败，请重试</div>
  </div>
</template>
<script>
  import detailActivity from '../components/detailActivity/detailActivity.vue'
  export default {
    data () {
      return {
        loading: false,
        error: null,
        datas: [],
        empty_data: false
      }
    },
    created () {
      this.getData()
    },
    mounted () {
    },
    methods: {
      getData () {}
    },
    components: {
      detailActivity
    }
  }
</script>
