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
            <el-button type="text" @click="deleteRows(scope, tableData)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="45"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import addForm from '../components/addForm.vue'
  import detailForm from '../components/detailForm.vue'
  export default {
    data () {
      return {
        tableData: [
          {
            date: '2017-05-09',
            name: 'test1',
            province: 'jiangsu',
            district: 'nanjing',
            address: 'asdasd',
            remarks: 'this is test remark'
          },
          {
            date: '2017-05-09',
            name: 'test2',
            province: 'jiangsu',
            district: 'nanjing',
            address: 'asdasd'
          }
        ]
      }
    },
    methods: {
      // index指当前这条数据，table指整个表格的数据
      showRows (index, table) {
        const h = this.$createElement
        this.$msgbox({
          title: '查看详细',
          message: h('detail-form', {props: {formData: index.row}}),
          closeOnClickModal: false
        })
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
              var flag = that.$refs['myForm'].submitValid()
              if (!flag) {
                return false
              } else {
                // handle submit functions
                console.log(that.$refs['myForm'].$refs['addforms'].model, '111')
              }
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
      },
      // 改变当前页码的事件
      handleCurrentChange (val) {
        console.log(val)
      },
      handleSizeChange (val) {
        console.log(val)
      },
      deleteRows () {}
    },
    components: {
      addForm,
      detailForm
    }
  }
</script>
<style scoped>
  .manage-table{
    padding: 20px;
  }
</style>
