<template>
  <div class="manage-wrapper">
    <div class="manage-nav">
      <el-menu>
        <el-submenu>
          <template slot="title">我发布的任务</template>
        </el-submenu>
      </el-menu>
    </div>
    <div class="manage-content">
      <div class="manage-operate">
        <el-button @click="openAdd">添加</el-button>
      </div>
      <div class="manage-table">
        <el-table :data="tableData" border>
          <!--<el-table-column type="selection"></el-table-column>-->
          <el-table-column label="ID" prop="id"></el-table-column>
          <el-table-column label="发布日期" prop="launch_date"></el-table-column>
          <el-table-column label="活动名称" prop="name"></el-table-column>
          <el-table-column label="活动地址" prop="province"></el-table-column>
          <el-table-column label="活动时间" prop="activity_time"></el-table-column>
          <el-table-column label="所需职业" prop="jobs"></el-table-column>
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
  </div>
</template>
<script>
  import addForm from '../../components/addForm.vue'
  import detailForm from '../../components/detailForm.vue'
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
          title: '创建活动',
          message: h('add-form', {ref: 'myForm'}),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          closeOnClickModal: false,
          customClass: 'add_dialog',
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
<style>
  .manage-table{
    padding: 20px;
  }
  .el-message-box.add_dialog{
    width: 539px;

  }
  .add_dialog .el-message-box__content{
    overflow-y: auto;
    max-height: 400px;
  }
  .manage-wrapper{
    display: -webkit-box;
  }
  .manage-content{
    -webkit-box-flex: 1;
  }
  .manage-nav{
    width: 200px;
  }
</style>
