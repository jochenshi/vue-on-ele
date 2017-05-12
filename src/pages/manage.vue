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
  import addForm from '../components/addForm.vue'
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
      openMethod () {
        this.$refs.addforms.resetFields()
      },
      openAdd () {
        const h = this.$createElement
        let that = this
        this.$msgbox({
          title: '创建',
          message: h('add-form', {ref: 'myForm'}),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal: false,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              console.log(instance)
              // instance.confirmButtonLoading = true
              console.log(that.$refs['myForm'].$refs['addforms'].model)
            } else {
              console.log('clicked cancel')
              done()
            }
          }
        })
        console.log(this.$refs)
        this.$nextTick(() => {
          this.$refs.myForm.$refs.addforms.resetFields()
        })
      }
    },
    components: {
      addForm
    }
  }
</script>
<style scoped>
  .manage-table{
    padding: 20px;
  }
</style>
