<template>
  <div>
    <div v-for="item in handledData">
      <span>{{item.title}}：</span>
      <span>{{item.text}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: ['formData'],
    computed: {
      handledData () {
        let temp = this.formData, resData = []
        resData.push({title: '名称', text: temp.name})
        resData.push({title: '省份', text: temp.province})
        resData.push({title: '市区', text: temp.district})
        resData.push({title: '地址', text: temp.address})
        resData.push({title: '日期', text: temp.date})
        return resData
      }
    }
  }
</script>
