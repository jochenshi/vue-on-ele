<template>
  <div class="login-content">
    <p class="title">title area</p>
    <div class="header-content">
      <span :class="{'active-span': login}" @click="clickLogin">登录</span><span :class="{'active-span': !login}" @click="clickRegist">注册</span>
    </div>
    <!--此处不能使用v-if进行条件展示，需要都进行渲染并在渲染之初就将相应的验证规则添加上去-->
    <div class="login-area" v-show="login">
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
        <el-form-item prop="account" label="账号">
          <el-input v-model="loginForm.account">
          </el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginForm.password" type="password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleClick">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="regist-area" v-show="!login">
      <el-form :model="registForm" ref="registForm" :rules="registRules">
        <el-form-item prop="nickname" label="昵称">
          <el-input v-model="registForm.nickname"></el-input>
        </el-form-item>
        <el-form-item prop="account" label="账号">
          <el-input v-model="registForm.account"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="registForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegist">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {login, register} from '../../service/getData'
  export default {
    data () {
      return {
        login: true,
        loginForm: {
          account: '',
          password: ''
        },
        registForm: {
          nickname: '',
          account: '',
          password: ''
        },
        loginRules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        registRules: {
          nickname: [
            {required: true, message: '昵称不能为空', trigger: 'blur'}
          ],
          account: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleClick () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            console.log(this.loginForm)
            login(this.loginForm).then((data) => {
              this.$store.dispatch('loginRecord', data).then(() => {
                console.log(11111)
                this.$router.push('/home')
              })
            })
          } else {
            return false
          }
        })
      },
      handleRegist () {
        this.$refs['registForm'].validate((valid) => {
          if (valid) {
            console.log(this.registForm)
            register(this.registForm).then((res) => {})
          } else {
            return false
          }
        })
      },
      clickLogin () {
        if (!this.login) {
          this.login = true
          let _this = this
          this.$nextTick(() => {
            _this.$refs['loginForm'].resetFields()
          })
        }
      },
      clickRegist () {
        if (this.login) {
          this.login = false
          let _this = this
          this.$nextTick(() => {
            _this.$refs['registForm'].resetFields()
          })
        }
      }
    }
  }
</script>
<style lang="stylus" src="./login.styl"></style>
