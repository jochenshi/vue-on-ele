<template>
  <div>
    <h2>This is recent page</h2>
    <recent-status v-for="i in 6"></recent-status>
  </div>
</template>
<script>
  import recentStatus from '../components/recentStatus.vue'
  export default {
    data () {
      return {}
    },
    components: {
      recentStatus
    }
  }
</script>
