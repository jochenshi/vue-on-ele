<template>
  <div class="apply-card">
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
          <span class="price-unit">/人</span>
        </div>
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
    <div class="apply-btn">
      <span>审核通过后请您尽快确认出活，否则将会被其他活友接走</span>
      <el-button size="small" :disabled="applyings.step === 3 ? false : true" @click="handleConfirm(applyings)">确认</el-button>
    </div>
  </div>
</template>
<script>
  import './applyInfo.styl'
  import detailActivity from '../detailActivity/detailActivity.vue'
  import test from '../test.vue'
  export default {
    data () {
      return {}
    },
    props: ['applyings'],
    methods: {
      handleConfirm (applyings) {
        console.log(applyings)
        var h = this.$createElement
        this.$msgbox({
          title: '报名提示',
          message: h('div', null, [h('div', null, '确认出活将先收取您活动费用的15%作为保证金以确保您按时出席，活动结束后，保证金全额返还'), h('div', null, 'aaaaa')])
        })
      }
    },
    components: {
      detailActivity,
      test
    }
  }
</script>
<!--<style lang="stylus" src="./applyInfo.styl"></style>-->
