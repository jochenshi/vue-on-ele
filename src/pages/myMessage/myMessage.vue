<template>
  <div class="my-message">
    <el-table border
              style="width: 100%"
              :data="tableData">
      <el-table-column label="消息内容" prop="message" show-overflow-tooltip></el-table-column>
      <el-table-column label="发送时间" prop="send_time" :formatter="formatTime"></el-table-column>
      <el-table-column label="发送者" prop="sender"></el-table-column>
    </el-table>
    <el-pagination
      :total="totalSize"
      layout="jumper, total, prev, pager, next"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
  import {getMessage} from '../../service/getData'
  import {formatTime} from '../../service/publicActions/methods'
  export default {
    data () {
      return {
        tableData: [],
        loading: true,
        totalSize: 20
      }
    },
    methods: {
      formatTime (row, column) {
        return formatTime(row.send_time)
      },
      getData () {
        getMessage().then((data) => {
          setTimeout(() => {
            this.tableData = data.data.data
          }, 3000)
        })
      },
      handleCurrentChange (val) {
        console.log('当前页', val)
        // 此处为对应的获取指定页的数据的方法
        let id = 'userId'
        let pageId = 'pageId'
        getMessage(id, pageId).then((val) => {
          this.tableData = val.data.data
        })
      }
    },
    mounted () {
      this.getData()
    }
  }
</script>
<style lang="stylus" src="./myMessage.styl"></style>
