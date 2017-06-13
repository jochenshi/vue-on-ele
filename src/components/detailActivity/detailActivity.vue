<template>
  <div class="activity-detail-content">
    <div class="title-content">
      <dl class="title">活动标题</dl>
      <div class="company">
        <span>xxx有限公司</span>
        <span>已认证</span>
      </div>
    </div>
    <div class="body-content add-margin">
      <ul>
        <li>
          <i class="fa fa-calendar-check-o"></i>
          <span class="label">活动日期</span>
          <span>2017.01.01-2017.01.02</span>
        </li>
        <li>
          <i class="fa fa-clock-o"></i>
          <span class="label">集合时间</span>
          <span>2017.01.01</span>
        </li>
        <li>
          <i class="fa fa-map-marker"></i>
          <span class="label">集合地点</span>
          <span>新街口德基广场一楼</span>
        </li>
        <li>
          <i class="fa fa-flag"></i>
          <span class="label">活动详情</span>
          <div>活动详情的内容</div>
        </li>
      </ul>
    </div>
    <div class="contact-content add-margin">
      <i class="fa fa-phone"></i>
      <span>联系方式</span>
    </div>
    <div class="jobs-content add-margin" v-for="o in 3">
        <i class="fa fa-pencil-square-o"></i>
        <span>职位{{o}}</span>
        <ul class="job-ul">
          <li>
            <span>职业类型</span>
            <span>歌手</span>
          </li>
          <li>
            <span>性别</span>
            <span>女</span>
          </li>
          <li>
            <span>身高</span>
            <span>180</span>
          </li>
          <li>
            <span>人数</span>
            <span>3</span>
            <span class="remain-number">剩余3个名额</span>
          </li>
          <li>
            <span>价格</span>
            <span>800</span>
          </li>
          <li>
            <span>职位要求</span>
            <span>要求民族唱法</span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="stylus" src="./detailActivity.styl"></style>
