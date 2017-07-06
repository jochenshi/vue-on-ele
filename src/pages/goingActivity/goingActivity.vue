<template>
  <div>
    <going-card v-for="(o, index) in goingApply" :applyings="o"></going-card>
  </div>
</template>
<script>
  import goingCard from '../../components/manageComponents/goingCard.vue'
  import {getGoingActivity} from '../../service/getData'
  export default {
    data () {
      return {
        goingApply: []
      }
    },
    components: {
      goingCard
    },
    mounted () {
      getGoingActivity().then((data) => {
        this.goingApply = data
      })
    }
  }
</script>
<style lang="stylus" src="./goingActivity.styl"></style>
