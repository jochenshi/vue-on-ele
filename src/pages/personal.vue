<template>
  <div>
    <span>This is personal page</span>
    <div>
      <el-input type="textarea" v-model="textarea" v-on:onpropertychange="handle"></el-input>
      <input type="text" v-on:input="handle()">
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        textarea: ''
      }
    },
    methods: {
      handle () {
        console.log(event.target.value)
      }
    },
    watch: {
    }
  }
</script>
