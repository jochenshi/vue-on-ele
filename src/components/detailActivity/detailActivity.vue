<template>
  <div class="activity-detail-content">
    <div class="title-content">
      <dl class="title">活动标题{{info.id}}</dl>
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
      <span class="phone-tips" v-if="!isSubscribed">报名成功后可见</span>
      <span class="phone-num" v-else>adsadasdasd</span>
    </div>
    <job-card :jobs=o :index=index :subscribed="isSubscribed" v-for="(o, index) in jobs" ></job-card>
  </div>
</template>
<script>
  import jobCard from '../jobCard/jobCard.vue'
  import {getDetailActivity} from '../../service/getData'
  export default {
    data () {
      return {
        jobs: [],
        isSubscribed: false
      }
    },
    props: ['info'],
    methods: {
      handle (id) {
        alert(id)
      },
      getDetail (id) {
        // 获取活动的详细信息
        getDetailActivity().then((a) => {
          this.jobs = a.occupations
          // this.isSubscribed = a.isSubscribed
          console.log(a)
        })
      }
    },
    components: {
      jobCard
    },
    mounted () {
      this.getDetail()
      console.log(this.info)
    }
  }
</script>
<style lang="stylus" src="./detailActivity.styl" scoped></style>
