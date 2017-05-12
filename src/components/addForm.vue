<template>
  <el-form label-width="80px" ref="addforms" v-bind:model="addforms">
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
        }
      }
    },
    methods: {
      getInfo () {
        console.log(this.addforms)
      }
    },
    mounted () {
    }
  }
</script>
