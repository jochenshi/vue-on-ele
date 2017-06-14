<template>
  <div class="activity-detail-content">
    <div class="title-content">
      <dl class="title">活动标题</dl>
      <dl class="release-time">
        <span>发布时间：</span>
        <span>2017-06-01 16:36:10</span>
      </dl>
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
          <div class="detail-desc">新街口春饼店开业活动，招募女模特4名，民族唱法女歌手3名，于2016.10.20 10:00在
          新街口德基广场1楼集合，不得迟到。</div>
        </li>
      </ul>
    </div>
    <div class="contact-content add-margin">
      <i class="fa fa-phone"></i>
      <span>联系方式</span>
      <span class="phone-tips" v-if="!isSigned">报名成功后可见</span>
      <span class="phone-num" v-else>adsadasdasd</span>
    </div>
    <job-card :jobs=o :index=index v-for="(o, index) in jobs" ></job-card>
    <!--<div class="jobs-content add-margin" v-for="o in 3">
        <div>
          <i class="fa fa-pencil-square-o"></i>
          <span>职位{{o}}</span>
          <i class="fa fa-caret-down" v-on:click="show = !show"></i>
        </div>
        <transition name="fade">
          <div v-if="show">
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
            <el-button class="apply-btn">报名</el-button>
          </div>
        </transition>
    </div>-->
  </div>
</template>
<script>
  import jobCard from '../jobCard/jobCard.vue'
  export default {
    data () {
      return {
        jobs: [
          {id: 1, occupation: '歌手', sex: 'female', height: '170+', number: 3, price: '800', unit: 'perperson', description: '要求民族唱法', remain: 3},
          {id: 2, occupation: '鼓手', sex: 'male', height: '175+', number: 2, price: '600', unit: 'perperson', description: '要求有较多演出经历', remain: 2},
          {id: 3, occupation: '吉他手', sex: 'male', height: '180+', number: 4, price: '600', unit: 'perperson', description: '要求能熟练弹奏以下曲目', remain: 4}
        ],
        isSigned: false
      }
    },
    methods: {
      handle (id) {
        alert(id)
      },
      getDetail (id) {
        // 获取活动的详细信息
      }
    },
    components: {
      jobCard
    }
  }
</script>
<style lang="stylus" src="./detailActivity.styl"></style>
