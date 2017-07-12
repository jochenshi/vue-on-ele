<template>
  <div class="activity-detail-content" v-if="info">
    <div class="title-content">
      <dl class="title">{{info.title}}</dl>
      <dl class="release-time">
        <span>发布时间：</span>
        <span>{{release_time}}</span>
      </dl>
      <div class="company">
        <span class="activity-sponsor">{{info.sponsor}}</span>
        <span>
          <i class="fa fa-address-card" :class="{certificated: info.certificate}"></i>
          <span>{{info.certificate ? '已认证' : '未认证'}}</span>
        </span>
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
          <span>{{gather_time}}</span>
        </li>
        <li>
          <i class="fa fa-map-marker"></i>
          <span class="label">集合地点</span>
          <span>{{info.gather_place}}</span>
        </li>
        <li>
          <i class="fa fa-flag"></i>
          <span class="label">活动详情</span>
          <div class="detail-desc">{{info.description}}</div>
        </li>
      </ul>
    </div>
    <div class="contact-content add-margin">
      <i class="fa fa-phone"></i>
      <span>联系方式</span>
      <span class="phone-num" v-for="(val, i) in contactList">
        <span>{{i + '：'+  val}}</span>
      </span>
    </div>
  </div>
  <div v-else v-loading="true"></div>
</template>
<script>
  import {getCertainActivity} from '../../../service/getData'
  import {getContact, formatTime} from '../../../service/publicActions/methods'
  export default {
    data () {
      return {
        info: '',
        contact: [],
        release_time: '',
        gather_time: ''
      }
    },
    props: ['id'],
    mounted () {
      setTimeout(() => {
        this.getCertainInfo(this.id)
      }, 2000)
    },
    computed: {
      contactList: function () {
        let a = {}
        let temp = this.contact
        for (let i in temp) {
          let indText = getContact(i)
          if (indText) {
            a[indText] = temp[i]
            // a.push({[indText]: temp[i]})
          }
        }
        return a
      }
    },
    methods: {
      getCertainInfo (id) {
        console.log(id)
        getCertainActivity(id).then((val) => {
          this.info = val.data
          this.contact = val.data.contact
          this.release_time = formatTime(val.data.release_time, 'YYYY-MM-DD hh:mm:ss')
          this.gather_time = formatTime(val.data.gather_time, 'YYYY-MM-DD hh:mm:ss')
        })
      }
    }
  }
</script>
<style lang="stylus" src="./goingDetail.styl"></style>
