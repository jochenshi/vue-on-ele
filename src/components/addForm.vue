<template>
  <el-form label-width="80px" ref="addforms">
    <el-form-item label="名称" prop="name" required>
      <el-input></el-input>
    </el-form-item>
    <el-form-item label="分类" prop="type" required>
      <el-checkbox-group v-mode="addforms.type">
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
          type: []
        },
        type: ''
      }
    }
  }
</script>
