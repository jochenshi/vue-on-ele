<template>
  <div class="going-card">
    <ul class="apply-ul" v-on:click="showDetail">
      <li>
        <span class="activity-name" :title="applyings.activity_name">{{applyings.activity_name}}</span>
        <span class="activity-release-time">8小时前</span>
      </li>
      <li class="time-location">
        <span class="last-time">10.18-10.19</span>
        <span class="event-location">{{applyings.event_location}}</span>
      </li>
      <li class="apply-detail">
        <div>
          <span class="apply-jobs">{{applyings.jobs}}</span>
          <div>
            <span>xxx演艺公司</span>
            <span>已认证</span>
          </div>
        </div>
        <div class="apply-price">
          ￥
          <span class="price-num">{{applyings.price}}</span>
          <span class="price-unit">/人</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: ['applyings'],
    methods: {
      showDetail () {}
    }
  }
</script>
<style lang="stylus" src="./goingCard.styl"></style>
