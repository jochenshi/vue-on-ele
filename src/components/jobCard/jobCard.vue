<template>
  <transition name="fade">
    <div class="jobs-content add-margin" :data-value="jobs.id">
      <div>
        <i class="fa fa-pencil-square-o"></i>
        <span>职位{{index + 1}}</span>
        <i class="fa fa-caret-down" v-on:click="handleIconClick()"></i>
      </div>
      <card-transition>
        <div class="trans" v-show="isActive">
          <div>
            <ul class="job-ul">
              <li>
                <span>职业类型</span>
                <span>{{jobs.occupation}}</span>
              </li>
              <li>
                <span>性别</span>
                <span>{{jobs.sex === 'female' ? '女' : '男'}}</span>
              </li>
              <li>
                <span>身高</span>
                <span>{{jobs.height}}</span>
              </li>
              <li>
                <span>人数</span>
                <span>{{jobs.total_number}}</span>
                <span class="remain-number">剩余{{jobs.remain_number}}个名额</span>
              </li>
              <li>
                <span>价格</span>
                <span>{{jobs.price + jobs.unit}}</span>
              </li>
              <li class="job-require">
                <span>职位要求</span>
                <span>{{jobs.requirement}}</span>
              </li>
            </ul>
            <el-button class="apply-btn" @click="signClick(jobs.id)" :disabled="subscribed ? true : false">报名</el-button>
          </div>
        </div>
      </card-transition>
    </div>
  </transition>
</template>
<script>
  import cardTransition from '../../transitions/collapse-transit'
  export default {
    data () {
      return {
        isActive: true
      }
    },
    // jobs是单个职位的信息,index是循环时传入的职位的索引，从0开始，用于标记是第几个职位,subscribed用于标记用户是否已经报名过这个活动
    props: ['jobs', 'index', 'subscribed'],
    methods: {
      handleIconClick () {
        this.isActive = !this.isActive
      },
      signClick (param) {
        // alert('received data:' + param)
        var taga = confirm('确认出活将收取您活动费用的15%作为保证金，以确保您按时出席，活动结束后，保证金全额返还。本次需支付：200活宝，确认支付?')
        if (taga) {
          alert('you clicked confirm')
        } else {
          alert('you clicked cancel')
        }
      }
    },
    mounted () {
      console.log(this.jobs)
    },
    components: {
      cardTransition
    }
  }
</script>
<style lang="stylus" src="./jobCard.styl"></style>
