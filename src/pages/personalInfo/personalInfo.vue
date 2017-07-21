<template>
  <div class="personal-info">
    <div class="personal-title">
      <span>设置个人资料</span>
    </div>
    <div class="personal-content">
      <el-col :span="11">
          <el-form ref="info-form" :model="infoForm" labelWidth="80px" :rules="rules">
            <el-form-item label="昵称" required prop="nickname">
              <el-input v-model="infoForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别" required prop="sex">
              <el-radio-group v-model="infoForm.sex">
                <el-radio label="male">男</el-radio>
                <el-radio label="female">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生年月" required prop="birth">
              <el-date-picker type="date" v-model="infoForm.birth"></el-date-picker>
            </el-form-item>
            <el-form-item label="身高" required prop="height">
              <el-input v-model.number="infoForm.height" type="age">
                <template slot="append">CM</template>
              </el-input>
            </el-form-item>
            <el-form-item label="手机" required prop="phone">
              <el-input v-model.number="infoForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" required prop="mail">
              <el-input v-model="infoForm.mail"></el-input>
            </el-form-item>
            <el-form-item label="个人简介">
              <el-input type="textarea" v-model="infoForm.description"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(infoForm, 'info-form')">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      <el-col :span="13" class="personal-avater">
        <div>头像</div>
        <div>头像上传功能，暂时缺失</div>
      </el-col>
    </div>
  </div>
</template>
<script>
  import {getInfo, setInfo} from '../../service/getData'
  export default {
    data () {
      let checkPhone = function (rule, value, callback) {
        if (!value) {
          callback(new Error('请输入手机号码'))
        } else if (!Number.isInteger(value) || value.toString().length !== 11) {
          callback(new Error('请输入正确的手机号码格式'))
        } else {
          callback()
        }
      }
      let checkBirth = (rule, value, callback) => {
        let curDate = new Date().getTime()
        if (!value) {
          callback(new Error('请选择出生日期'))
        } else if (new Date(value).getTime() > curDate) {
          callback(new Error('出生日期不能晚于当前日期'))
        } else {
          callback()
        }
      }
      return {
        infoForm: {
          nickname: '',
          sex: '',
          birth: '',
          height: '',
          phone: '',
          mail: '',
          description: ''
        },
        rules: {
          nickname: [
            {required: true, message: '请输入名称', trigger: 'blur'},
            { min: 5, max: 20, message: '请输入5到20个字符', trigger: 'blur' }
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'change'}
          ],
          birth: [
            {validator: checkBirth, trigger: 'change'}
          ],
          height: [
            {required: true, message: '请输入身高'},
            {type: 'number', message: '请输入数字'}
          ],
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ],
          mail: [
            {required: true, message: '请输入邮箱地址'},
            {type: 'email', message: '请输入正确的邮箱格式'}
          ]
        }
      }
    },
    methods: {
      submitForm (data, formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(data)
            setInfo(data).then(() => {
              this.getInfo()
            })
          } else {
            return false
          }
        })
      },
      getInfo () {
        getInfo().then((data) => {
          console.log(data)
          var _this = this
          var temp = data.data[0]
          var index = ['nickname', 'sex', 'birth', 'height', 'phone', 'mail', 'description']
          index.forEach(function (val) {
            if (temp[val]) {
              val === 'phone' ? _this.infoForm[val] = Number(temp[val]) : _this.infoForm[val] = temp[val]
            }
          })
          // this.infoForm = data.data[0]
        }, (res) => {
          this.$store.dispatch('handleError', 'asdasdasd')
          console.log(res)
        })
      }
    },
    mounted () {
      this.getInfo()
    }
  }
</script>
<style lang="stylus" src="./personalInfo.styl">
</style>
