<template>
  <div class="page-area">
    <h2>This is home page</h2>
    <div class="product-content">
      <el-row>
        <el-col :span="8" v-for="(o, index) in activities" v-if="activities.length > 0">
          <el-card>
            <img src="" alt="">
            <div>
              <span>{{o.title}}</span><span class="release-time">8小时前</span>
              <div class="activity-period">活动持续时间</div>
              <div class="product-tags">放置标签，关键词</div>
              <div>发起人：{{o.sponsor}}</div>
              <div class="button-area">
                <span class="time">{{o.launch_date}}</span>
                <el-button class="button" type="text" @click="clickCard(o)">查看详细</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <div v-if="activities.length == 0">暂无数据</div>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {getUser, getActivity} from '../../service/getData'
  export default {
    data () {
      return {
        users: [],
        activities: []
      }
    },
    methods: {
      clickCard (index) {
        console.log('you clicked card', index)
      },
      getUsers () {},
      getActivities () {
        getActivity().then((a) => {
          this.activities = a.data
          console.log(a)
        })
      }
    },
    mounted () {
      getUser()
      this.getActivities()
    }
  }
</script>
<style scoped lang="stylus" src="./home.styl"></style>
