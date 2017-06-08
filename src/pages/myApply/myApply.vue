<template>
  <div>
    <apply-info v-for="o in 6">{{o}}</apply-info>
  </div>
</template>
<script>
  import applyInfo from '../../components/applyInfo/applyInfo.vue'
  export default {
    data () {
      return {}
    },
    components: {
      applyInfo
    }
  }
</script>
