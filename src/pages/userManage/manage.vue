<template>
  <div class="manage-wrapper">
    <div class="manage-nav">
      <el-menu :router="true" :defaultActive="currentIndex">
        <el-menu-item index="/manage/personalInfo">个人资料</el-menu-item>
        <el-menu-item index="/manage/applying">我的报名</el-menu-item>
        <el-menu-item index="/manage/going">正在出活</el-menu-item>
        <el-menu-item index="/manage/finished">已完成出活</el-menu-item>
        <el-menu-item index="/manage/myMessage">我的消息</el-menu-item>
        <el-menu-item index="/manage/myFocus">我的关注</el-menu-item>
        <!--<el-submenu index="">
          <template slot="title">我的评价</template>
          <el-menu-item index="receivedJudge">我收到的评价</el-menu-item>
          <el-menu-item index="givingJudge">我给出的评价</el-menu-item>
        </el-submenu>-->
        <el-menu-item index="/manage/receivedJudge">我收到的评价</el-menu-item>
        <el-menu-item index="/manage/givingJudge">我给出的评价</el-menu-item>
        <el-menu-item index="/manage/mySetting">我的设置</el-menu-item>
      </el-menu>
    </div>
    <div class="manage-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentIndex: 'personalInfo'
      }
    },
    methods: {
      getCurrentPage () {
      }
    },
    mounted () {
      var pa = this.$route.path.split('/')
      this.currentIndex = pa[pa.length - 1]
      console.log(this.currentIndex)
    }
  }
</script>
<style lang="stylus" src="./userManage.styl">
</style>
