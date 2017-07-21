<template>
  <div class="page-area">
    <div class="search-area"></div>
    <div class="product-content">
      <el-row>
        <el-col :span="8" v-for="(o, index) in activities" v-if="activities.length > 0">
          <el-card>
            <img src="" alt="">
            <div class="main-activity">
              <ul>
                <li>
                  <span :title="o.title">{{o.title}}</span><span class="release-time">{{o.release_time}}</span>
                </li>
                <li class="middle-content">
                  <div class="left-content">
                    <span class="activity-period">10月18日-10月19日</span>
                    <div class="activity-tags">
                      <template v-if="o.jobs.length < 5">
                        <span v-for="(i, indexs) in o.jobs">{{i}}</span>
                      </template>
                      <template v-else>
                        <span v-for="i in 4">{{o.jobs[i]}}</span>
                      </template>
                    </div>
                    <div class="user-auth">
                      <span class="user-sponsor">{{o.sponsor}}</span>
                      <span>
                        <i class="fa fa-address-card" :class="{certificated: o.certificate}"></i>
                        <span class="certificate">{{o.certificate ? '已认证' : '未认证'}}</span>
                      </span>
                    </div>
                  </div>
                  <div class="right-price">
                    ￥
                    <span class="price-num">{{o.price}}</span>
                    <span class="price-unit">/人</span>
                  </div>
                </li>
                <li  class="button-area">
                  <el-button class="button" type="text" @click="clickCard(o)">查看详细</el-button>
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
        <div v-if="activities.length == 0">暂无数据</div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {getActivity} from '../../service/getData'
  import {formatJobs, getDateDiff} from '../../service/publicActions/methods'
  import detailActivity from '../../components/detailActivity/detailActivity.vue'
  export default {
    data () {
      return {
        users: [],
        activities: []
      }
    },
    methods: {
      clickCard (data) {
        console.log('you clicked card', data)
        const h = this.$createElement
        this.$msgbox({
          title: '报名详情',
          message: h('detail-activity', {props: {info: data}, key: Date.now()}),
          customClass: 'detail-apply',
          closeOnClickModal: false,
          beforeClose: (action, instance, done) => {
            done()
          }
        })
      },
      getUsers () {},
      getActivities () {
        getActivity().then((a) => {
          // 此处为隔离因对象引用而产生的影响
          let datas = JSON.parse(JSON.stringify(a))
          datas.data.forEach((val, index) => {
            val.jobs = formatJobs(val.jobs)
            val.release_time = getDateDiff(val.release_time)
          })
          this.activities = datas.data
          console.log('2', datas)
        })
      }
    },
    mounted () {
      // getUser()
      this.getActivities()
      console.log(this.$store.state)
    },
    components: {
      detailActivity
    }
  }
</script>
<style lang="stylus" src="./home.styl"></style>
