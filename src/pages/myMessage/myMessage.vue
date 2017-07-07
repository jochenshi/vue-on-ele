<template>
  <div>
    <el-table border
              style="width: 100%"
              :data="tableData">
      <el-table-column label="消息内容" prop="message"></el-table-column>
      <el-table-column label="接收时间" prop="receive_time"></el-table-column>
      <el-table-column label="发送者" prop="sender"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: []
      }
    }
  }
</script>
