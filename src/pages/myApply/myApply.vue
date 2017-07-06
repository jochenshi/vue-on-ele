<template>
  <div>
    <apply-info v-for="(o, index) in applyInfo" v-bind:applyings="o" v-on:updateApply="getApply">{{o}}</apply-info>
  </div>
</template>
<script>
  import applyInfo from '../../components/applyInfo/applyInfo.vue'
  import {getApplying} from '../../service/getData'
  export default {
    data () {
      return {
        applyInfo: []
      }
    },
    components: {
      applyInfo
    },
    methods: {
      clickCard () {},
      getSign () {
        getApplying().then((data) => {
          this.applyInfo = data
          console.log(this.applyInfo)
        })
      },
      getApply () {
        getApplying().then((data) => {
          this.applyInfo = data
        })
      }
    },
    mounted () {
      this.getSign()
    }
  }
</script>
