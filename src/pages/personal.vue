<template>
  <!--<div>
    <span>This is personal page</span>
    <div>
      <el-input type="textarea" v-model="textarea" v-on:onpropertychange="handle"></el-input>
      <input type="text" v-on:input="handle()">
    </div>
  </div>-->
  <div>
    <upload></upload>
  </div>
</template>
<script>
  import upload from '../components/upload/upload.vue'
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
    components: {
      upload
    },
    watch: {
    }
  }
</script>
