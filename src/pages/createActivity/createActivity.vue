<template>
  <div class="create-wrapper">
    <div class="create-content">
      <div>
        <el-form label-width="100px">
          <el-form-item prop="title" label="通告标题">
            <el-input placeholder="为你的通告起一个标题吧，30字以内"></el-input>
          </el-form-item>
          <el-form-item prop="time" label="活动时间">
            <div class="time-area">
              <el-form-item prop="date1">
                <el-date-picker></el-date-picker>
              </el-form-item>
              <div class="el-form-item separate-line">-</div>
              <el-form-item prop="date2">
                <el-date-picker></el-date-picker>
              </el-form-item>
            </div>
          </el-form-item>
          <el-form-item prop="gather_time" label="集合时间">
            <el-date-picker></el-date-picker>
          </el-form-item>
          <el-form-item prop="gather_place" label="集合地点">
            <el-input placeholder="请填写活动当天集合详细地址，50字以内"></el-input>
          </el-form-item>
          <el-form-item prop="description" label="活动详情">
            <el-input type="textarea" placeholder="请填写您的活动详情，400字以内"></el-input>
          </el-form-item>
          <el-form-item prop="contact" label="联系方式">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>
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
<style lang="stylus" src="./createActivity.styl"></style>
