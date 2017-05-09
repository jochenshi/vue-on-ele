<template>
  <div>
    <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" class="nav-content">
      <router-link to="/">
        <el-menu-item index="1">首页</el-menu-item>
      </router-link>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">导航1</el-menu-item>
        <el-menu-item index="2-2">导航2</el-menu-item>
        <el-menu-item index="2-3">导航3</el-menu-item>
      </el-submenu>
      <router-link to="/manage">
        <el-menu-item index="3">管理</el-menu-item>
      </router-link>
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
      getSelected () {
        var a = window.location.hash.split('/')[1]
        if (a === 'manage') {
          console.log(a)
          this.activeIndex = '3'
        } else if (a === 'home') {
          this.activeIndex = '1'
        }
      }
    },
    mounted () {
      this.getSelected()
    },
    computed: {
    }
  }
</script>
<style scoped>
  .nav-content{
    padding-left: 60px;
  }
</style>
