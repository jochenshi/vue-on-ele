<template>
  <transition name="fade">
    <div class="jobs-content add-margin" v-bind:class="{isHide: hide}" :data-value="jobs.id">
      <div>
        <i class="fa fa-pencil-square-o"></i>
        <span>职位{{index + 1}}</span>
        <i class="fa fa-caret-down" v-on:click="handleIconClick()"></i>
      </div>
      <div class="trans">
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
              <span>{{jobs.number}}</span>
              <span class="remain-number">剩余{{jobs.remain}}个名额</span>
            </li>
            <li>
              <span>价格</span>
              <span>{{jobs.price + jobs.unit}}</span>
            </li>
            <li>
              <span>职位要求</span>
              <span>{{jobs.description}}</span>
            </li>
          </ul>
          <el-button class="apply-btn" @click="signClick(jobs.id)">报名</el-button>
        </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        hide: false
      }
    },
    props: ['jobs', 'index'],
    methods: {
      handleIconClick () {
        this.hide = !this.hide
      },
      signClick (param) {
        alert('received data:' + param)
      }
    },
    mounted () {
      console.log(this.jobs)
    }
  }
</script>
<style lang="stylus" src="./jobCard.styl"></style>
