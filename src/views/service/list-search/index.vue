<template>
  <div class="listSearch">
    <div class="searchBox">
      <van-search v-model="searchValue" placeholder="根据医院、疾病或科室搜索医生" style="background: #F5F5F5;width: 88%" class="flo_l">
      </van-search>
      <div @click="goBack" style="color: #FF8A30;margin-top: 6px;" class="inline-block flo_r">取消</div>
    </div>
    <div class="hotSearch" v-if="!searchValue">
      <p class="font26 color9 flo_l">历史搜索</p>
      <div class="mainDel flo_r">
        <img src="@/assets/image/userIcon/deleteIcon.png" alt="">
        <span class="font26">清空</span>
      </div>
      <p class="clearfloat"></p>
      <div class="clickBtn color3 font22 text-center flo_l"  @click="search('深圳')">深圳</div>
    </div>
    <div class="hotSearch" v-if="!searchValue">
      <p class="font26 color9">热门搜索</p>
      <div class="clickBtn color3 font22 text-center flo_l" v-for="(item,index) in hotList" :key="index" @click="search(item)">{{item}}</div>
    </div>
    <div class="doctorBox" v-if="searchValue">
      <DoctorList :list="list"></DoctorList>
      <div class="btnBox font12 text-center">
      </div>
    </div>
  </div>
</template>
<script>
import DoctorList from '../../../views/components/doctorList'

export default {
  components: {
    DoctorList
  },
  data () {
    return {
      searchValue: '',
      hotList: ['感冒', '高血压', '深圳', '上海', '痘痘', '胃痛'],
      list: [
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 5
        },
        {
          photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036745067,4011189473&fm=26&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 5
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 5
        }
      ]
    }
  },
  methods: {
    search (item) {
      this.searchValue = item
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';

  .listSearch{
    background: white;
    min-height: 100vh;
    padding: 30px;
    .searchBox{
      overflow: hidden;
    }
  }
  .van-search__content{
    border-radius: 32px;
    padding-left: 12px;
  }
  .hotSearch{
    padding: 30px 0;
    overflow: hidden;
    padding-bottom: 0;
    .clickBtn{
      background: #F5F5F5;
      padding: 8px 42px;
      border-radius: 22px;
      margin: 22px 32px 22px 0;
    }
  }

  .mainDel {
    img{
      width: 28px;
      height: 28px;
      vertical-align: middle;
      margin-bottom: 8px;
    }
    span{color: #b2b2b2}
  }

</style>
