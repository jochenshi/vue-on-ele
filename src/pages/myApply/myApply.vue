<template>
  <div>
    <apply-info v-for="(o, index) in applyInfo" v-bind:applyings="o">{{o}}</apply-info>
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
      }
    },
    mounted () {
      this.getSign()
    }
  }
</script>
