<template>
  <div class="app-content">
    <el-menu mode="horizontal" :router="true" :default-active="activeIndex" @select="handleSelect" class="nav-content">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/recent">最近动态</el-menu-item>
        <el-menu-item index="">导航2</el-menu-item>
        <el-menu-item index="2-3">导航3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/manage">管理</el-menu-item>
      <el-menu-item index="/personal" class="personal-nav">个人</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      // after user element ui router mode ,this method can bu removed
      getSelected () {
        var a = window.location.hash.split('/')[1]
        let hash
        switch (a) {
          case 'manage':
            hash = '3'
            break
          case 'personal':
            hash = '4'
            break
          case 'recent':
            hash = '2-1'
            break
          case 'home':
          default:
            hash = '1'
            break
        }
        this.activeIndex = hash
      }
    },
    mounted () {
      // this.getSelected()
      this.activeIndex = this.$route.path
    },
    computed: {
    }
  }
</script>
<style scoped>
  @import "assets/style/main.css";
  .nav-content{
    padding-left: 60px;
  }
</style>
