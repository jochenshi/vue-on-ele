<template>
  <div class="manage-wrapper">
    <div class="manage-nav">
      <el-menu :router="true">
        <el-menu-item index="applying">我的报名</el-menu-item>
        <el-menu-item index="going">正在出活</el-menu-item>
        <el-menu-item index="finished">已完成出活</el-menu-item>
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
      return {}
    }
  }
</script>
<style lang="stylus" src="./userManage.styl">
</style>
