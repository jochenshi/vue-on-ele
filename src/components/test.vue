<template>
  <button v-on:click="increment" ref="aaa">{{counter}}</button>
</template>
<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment () {
        this.counter += 1
      }
    }
  }
</script>
