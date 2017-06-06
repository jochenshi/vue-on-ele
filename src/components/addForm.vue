<template>
  <el-form label-width="80px" ref="addforms" v-bind:model="addforms" :rules="rules">
    <el-form-item label="活动名称" prop="name" required>
      <el-input v-model="addforms.name"></el-input>
    </el-form-item>
    <el-form-item label="活动地址" prop="address" required>
      <el-input v-model="addforms.address"></el-input>
    </el-form-item>
    <el-form-item label="活动时间" prop="time" required>
      <el-date-picker v-model="addforms.address" type="datetime"></el-date-picker> - <el-date-picker v-model="addforms.address" type="datetime"></el-date-picker>
    </el-form-item>
    <el-form-item label="所需职业" prop="jobs" required>
      <el-select v-model="addforms.jobs">
        <el-option label="歌手" value="1"></el-option>
        <el-option label="鼓手" value="2"></el-option>
        <el-option label="吉他手" value="3"></el-option>
        <el-option label="主持" value="4"></el-option>
        <el-option label="魔术" value="5"></el-option>
        <el-option label="杂耍" value="6"></el-option>
        <el-option label="小提琴手" value="7"></el-option>
        <el-option label="小提琴手" value="8"></el-option>
        <el-option label="小提琴手" value="9"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动酬劳" prop="reward" required>
      <el-input v-model="addforms.reward">
        <template slot="append">元/人</template>
      </el-input>
    </el-form-item>
    <el-form-item label="集合时间" prop="assemble_time" required>
      <el-date-picker v-model="addforms.assemble_time" type="datetime"></el-date-picker>
    </el-form-item>
    <el-form-item label="集合地点" prop="assemble_location" required>
      <el-input v-model="addforms.assemble_location"></el-input>
    </el-form-item>
    <el-form-item label="活动详情" prop="activity_detail" required>
      <el-input
        type="textarea"
        :autosize="{minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="addforms.activity_detail"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data () {
      return {
        addforms: {
          name: '',
          address: '',
          jobs: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          type: [
            {required: true, type: 'array', message: '请至少选择一个类型', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      getInfo () {
        console.log(this.addforms)
      },
      submitValid () {
        let flag
        this.$refs['addforms'].validate((valid) => {
          if (valid) {
            flag = true
          } else {
            console.log('error submit')
            flag = false
          }
        })
        return flag
      }
    },
    mounted () {
    }
  }
</script>
