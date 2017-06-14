<template>
  <div class="apply-card">
    <ul class="apply-ul">
      <li>
        <span class="activity-name" title="10.18号，新街口春饼店开业，需要鼓手歌手各3名。">10.18号，新街口春饼店开业，需要鼓手歌手各3名。</span>
        <span class="activity-release-time">8小时前</span>
      </li>
      <li class="time-location">
        <span class="last-time">10.18-10.19</span>
        <span class="event-location">新街口商业区</span>
      </li>
      <li class="apply-detail">
        <div>
          <span class="apply-jobs">歌手</span>
          <div>
            <span>xxx演艺公司</span>
            <span>已认证</span>
          </div>
        </div>
        <div class="apply-price">
          ￥
          <span class="price-num">800</span>
          <span class="price-unit">/人</span></div>
      </li>
      <li>
        <div class="apply-step">
          <el-steps :center="true" :align-center="true" :active="1">
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
  export default {
    data () {
      return {}
    }
  }
</script>
<!--<style lang="stylus" src="./applyInfo.styl"></style>-->
