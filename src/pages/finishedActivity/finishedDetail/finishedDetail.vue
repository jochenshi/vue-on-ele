<template>
  <div class="detail-content">
    <dl>活动的标题</dl>
    <dl>发布时间</dl>
    <ul class="judge-area">
      <li>
        <span class="judge-label">请给此次活动打分</span>
        <el-rate :show-text="true"
                 v-model="judge_level"
                 :texts="['极差', '一般', '中评', '满意', '好评']">
        </el-rate>
      </li>
      <li class="input-area">
        <span>我的评价</span>
        <el-input
          placeholder="请输入文字"
          :autosize="{minRows: 2, maxRows: 4}"
          type="textarea"></el-input>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        judge_level: ''
      }
    },
    mounted () {
      console.log(this.$route.params)
    },
    methods: {
      getDetail (id) {}
    }
  }
</script>
<style lang="stylus" src="./finishedDetail.styl"></style>
