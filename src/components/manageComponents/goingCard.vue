<template>
  <div class="going-card">
    <ul class="apply-ul" v-on:click="showDetail">
      <li>
        <span class="activity-name" :title="applyings.activity_name">{{applyings.title}}</span>
        <span class="activity-release-time">{{release_time}}</span>
      </li>
      <li class="time-location">
        <span class="last-time">10.18-10.19</span>
        <span class="event-location">{{applyings.activity_place}}</span>
      </li>
      <li class="apply-detail">
        <div>
          <span class="apply-jobs">{{applyings.jobs}}</span>
          <div class="apply-auth">
            <span class="apply-sponsor">{{applyings.sponsor}}</span>
            <span>
              <i class="fa fa-address-card" :class="{certificated: applyings.certificate}"></i>
              <span>{{applyings.certificate ? '已认证' : '未认证'}}</span>
            </span>
          </div>
        </div>
        <div class="apply-price">
          ￥
          <span class="price-num">{{applyings.price}}</span>
          <span class="price-unit">/人</span>
        </div>
      </li>
    </ul>
    <slot name="button"></slot>
  </div>
</template>
<script>
  import {getDateDiff} from '../../service/publicActions/methods'
  import goingDetail from '../../pages/goingActivity/detail/goingDetail.vue'
  export default {
    data () {
      return {}
    },
    props: ['applyings'],
    computed: {
      release_time: function () {
        return getDateDiff(this.applyings.release_time)
      }
    },
    methods: {
      showDetail () {
        var h = this.$createElement
        this.$msgbox({
          title: '正在出活',
          message: h('going-detail', {key: Date.now(), props: {id: this.applyings.id}}),
          customClass: 'going-message'
        })
      }
    },
    components: {
      goingDetail
    }
  }
</script>
<style lang="stylus" src="./goingCard.styl"></style>
