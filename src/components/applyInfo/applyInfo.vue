<template>
  <div class="apply-card">
    <ul>
      <li>
        <span>活动名称</span>
        <span>活动发布时间</span>
      </li>
      <li>
        <span>活动持续时间</span>
        <span>活动地点</span>
      </li>
      <li class="apply-detail">
        <div>
          <div>申请的职位</div>
          <div>
            <span>发布人</span>
            <span>发布人的认证标签</span>
          </div>
        </div>
        <div class="apply-price">800 人/天</div>
      </li>
      <li>
        <div>放置审核流程</div>
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
