<template>
  <div class="review-activity">
    <p>review activity</p>
    <el-table border style="width: 100%" :data="tableData">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="活动标题" prop="activity_name" show-overflow-tooltip></el-table-column>
      <el-table-column label="发布者" prop="sponsor"></el-table-column>
      <el-table-column label="发布时间" prop="release_time"></el-table-column>
      <el-table-column label="活动细节" prop="activity_detail" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button type="text">通过</el-button>
          <el-button type="text">不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[10, 15, 20]"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>
<script>
  import {getReviews} from '../../service/getData'
  export default {
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      getActivity () {
        getReviews().then((data) => {
          this.tableData = data
        })
      }
    },
    mounted () {
      this.getActivity()
    }
  }
</script>
<style lang="stylus" src="./reviewActivity.styl"></style>
