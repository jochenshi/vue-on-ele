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
            <el-button class="apply-btn" @click="signClick(jobs.id)" :disabled="btnStatus ? true : false" :loading="isSigning">{{btnText}}</el-button>
          </div>
        </div>
      </card-transition>
    </div>
  </transition>
</template>
<script>
  import cardTransition from '../../transitions/collapse-transit'
  import {handleSign} from '../../service/getData'
  export default {
    data () {
      return {
        isActive: true, // 面板的显示与隐藏
        isSigning: false, // 标记单个职位是否处于报名中的状态
        isSubscribed: false
      }
    },
    // jobs是单个职位的信息,index是循环时传入的职位的索引，从0开始，用于标记是第几个职位,subscribed用于标记用户是否已经报名过这个活动
    props: ['jobs', 'index', 'subscribed'],
    computed: {
      btnStatus: function () {
        var temp = false
        if (this.subscribed || this.isSubscribed) {
          temp = true
        } else {
          temp = false
        }
        return temp
      },
      btnText: function () {
        var text = ''
        if (this.subscribed || this.isSubscribed) {
          text = '已报名'
        } else if (this.isSigning) {
          text = '报名中'
        } else {
          text = '报名'
        }
        return text
      }
    },
    methods: {
      handleIconClick () {
        this.isActive = !this.isActive
      },
      signClick (param) {
        console.log('received data:' + param)
        var taga = confirm('报名将消耗1活券，是否确认报名？')
        if (taga) {
          this.handleSign('1')
        } else {
          alert('you clicked cancel')
        }
      },
      handleSign (param) {
        this.isSigning = true
        handleSign(param).then((data) => {
          console.log('ok', data)
          setTimeout(() => {
            this.isSigning = false
            this.$message({
              showClose: true,
              message: '报名成功',
              type: 'success'
            })
          }, 5000)
        }).catch((response) => {
          setTimeout(() => {
            this.$message({
              showClose: true,
              message: '报名失败',
              type: 'error'
            })
            this.isSigning = false
            this.isSubscribed = true
            console.log(this.btnStatus)
          }, 5000)
          console.log(response)
        })
      }
    },
    mounted () {
      console.log(this.jobs)
      console.log('sd', this.isSubscribed)
    },
    components: {
      cardTransition
    }
  }
</script>
<style lang="stylus" src="./jobCard.styl"></style>
