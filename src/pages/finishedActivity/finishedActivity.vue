<template>
  <div class="finished-page">
    <finish-card v-for="o in finishedActivity" :applyings="o">
      <el-button slot="button" class="evaluate-btn" @click="handleEvaluate(o)" size="small">评价</el-button>
    </finish-card>
  </div>
</template>
<script>
  import finishCard from '../../components/manageComponents/finishedCard.vue'
  import {getApplying} from '../../service/getData'
  import './finishedActivity.styl'
  export default {
    data () {
      return {
        finishedActivity: []
      }
    },
    mounted () {
      getApplying().then((data) => {
        this.finishedActivity = data
      })
    },
    methods: {
      handleEvaluate (data) {
        console.log(data)
        alert('you clicked' + data.id)
      }
    },
    components: {
      finishCard
    }
  }
</script>
