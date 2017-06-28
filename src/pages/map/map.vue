<template>
  <div id="map-content">
    <div>map area</div>
    <div id="map-area"></div>
  </div>
</template>
<script>
  import BMap from 'BMap'
  export default {
    data () {
      return {}
    },
    mounted () {
      this.ready()
    },
    methods: {
      ready () {
        let map = new BMap.Map('map-area')
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
        map.addControl(new BMap.MapTypeControl())
        map.setCurrentCity('北京')
        map.enableScrollWheelZoom(true)
      }
    }
  }
</script>
<style lang="stylus" src="./map.styl"></style>
