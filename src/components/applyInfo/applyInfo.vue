<template>
  <div class="apply-card" v-on:click="showDetail">
    <ul class="apply-ul">
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
          <span class="price-unit">/人</span></div>
      </li>
      <li>
        <div class="apply-step">
          <el-steps :center="true" :align-center="true" :active="applyings.step">
            <el-step title="报名成功"></el-step>
            <el-step title="审核通过"></el-step>
            <el-step title="确认出活"></el-step>
          </el-steps>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import './applyInfo.styl'
  import detailActivity from '../detailActivity/detailActivity.vue'
  export default {
    data () {
      return {}
    },
    props: ['applyings'],
    methods: {
      showDetail () {
        const h = this.$createElement
        this.$msgbox({
          title: '报名详情',
          message: h('detail-activity', this.applyings.activity_name)
        }).addClass('asd')
      }
    },
    components: {
      detailActivity
    }
  }
</script>
<!--<style lang="stylus" src="./applyInfo.styl"></style>-->
