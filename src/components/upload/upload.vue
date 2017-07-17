<template>
  <div class="s-upload-wrapper">
    <div>upload-content</div>
    <div class="upload" @click="handleClick">
      <img :src="img" alt="" v-if="img" class="img-area">
      <i class="upload-icon fa fa-plus" v-else></i>
      <input type="file" class="upload-input" ref="input" @change="handleChange">
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        img: '',
        disabled: false
      }
    },
    methods: {
      handleClick () {
        if (!this.disabled) {
          this.$refs.input.click()
        }
      },
      handleChange () {
        console.log(this.$refs.input.files[0])
        var file = this.$refs.input.files[0]
        if (!file.type.match('image/')) {
          return false
        }
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (arg) => {
          this.img = arg.target.result
        }
      },
      handleSubmit () {
        var formData = new FormData()
        var fileData = this.$refs.input.files[0]
        if (!fileData.type.match('image/')) {
          return false
        }
        formData.append('img', fileData)
      }
    }
  }
</script>
<style lang="stylus" src="./upload.styl"></style>
