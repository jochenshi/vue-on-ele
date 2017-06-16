<template>
  <div>
    <apply-info v-for="(o, index) in applyInfo" v-bind:applyings="o" v-on:click="showDetail()">{{o}}</apply-info>
    <div>
      <router-view></router-view>
    </div>
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
      showDetail (data) {
        console.log(111)
        const h = this.$createElement
        this.$msgbox({
          title: '报名详情',
          message: h('p', 'asdasd')
        })
      }
    },
    mounted () {
      this.getSign()
    }
  }
</script>
