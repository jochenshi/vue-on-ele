<template>
  <div>
    <h2>This is manage page</h2>
    <div class="manage-operate">
      <el-button @click="openAdd">添加</el-button>
    </div>
    <div class="manage-table">
      <el-table :data="tableData" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="日期" prop="date"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="省份" prop="province"></el-table-column>
        <el-table-column label="市区" prop="district"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="text" @click="showRows(scope, tableData)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData: [
          {
            date: '2017-05-09',
            name: 'test1',
            province: 'jiangsu',
            district: 'nanjing',
            address: 'asdasd'
          }
        ]
      }
    },
    methods: {
      showRows (index, rows) {
        console.log(index)
        console.log(rows)
      },
      openAdd () {
        const h = this.$createElement
        this.$msgbox({
          title: '创建',
          message: h('el-form', {props: {labelPosition: 'right'}}, [
            h('el-form-item', {props: {label: 'asd', labelPosition: 'right'}}, [
              h('el-input')
            ])
          ])
        })
      }
    }
  }
</script>
<style scoped>
  .manage-table{
    padding: 20px;
  }
</style>
