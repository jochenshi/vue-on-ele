<template>
  <div>
    <h2>This is home page</h2>
    <div class="product-content">
      <span v-for="i in 2">{{'asdasd' + i}}</span>
      <el-row>
        <el-col :span="8" v-for="o in 3">
          <el-card>
            <img src="" alt="">
            <div>
              <span>card{{o}}</span>
              <div class="button-area">
                <span class="time"></span>
                <el-button class="button" type="text">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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
