<template>
  <el-form label-width="80px" ref="addforms" v-bind:model="addforms" :rules="rules">
    <el-form-item label="名称" prop="name" required>
      <el-input v-model="addforms.name"></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="address" required>
      <el-input v-model="addforms.address"></el-input>
    </el-form-item>
    <el-form-item label="分类" prop="type" required>
      <el-checkbox-group v-model="addforms.type">
        <el-checkbox label="电子产品" name="type"></el-checkbox>
        <el-checkbox label="食品" name="type"></el-checkbox>
        <el-checkbox label="零食" name="type"></el-checkbox>
        <el-checkbox label="书籍" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data () {
      return {
        addforms: {
          type: [],
          name: '',
          address: ''
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
