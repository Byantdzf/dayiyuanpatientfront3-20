<template>
  <div class="listSearch">
    <div class="searchBox">
      <van-search v-model="searchValue" @search="onSearch" placeholder="根据医院、疾病或科室搜索医生" style="background: #F5F5F5;width: 88%" class="flo_l">
      </van-search>
      <div @click="goBack" style="color: #FF8A30;margin-top: 6px;" class="inline-block flo_r">取消</div>
    </div>
    <div class="hotSearch" v-if="latelySearch.length && !showDoctorList">
      <p class="font26 color9 flo_l">历史搜索</p>
      <div class="mainDel flo_r" @click="remove">
        <img src="@/assets/image/userIcon/deleteIcon.png" alt="">
        <span class="font26">清空</span>
      </div>
      <p class="clearfloat"></p>
      <div class="clickBtn color3 font22 text-center flo_l" v-for="(item,index) in latelySearch" :key="index"  @click="search(item)">{{item}}</div>
    </div>
    <div class="hotSearch" v-if="!showDoctorList">
      <p class="font26 color9">热门搜索</p>
      <div class="clickBtn color3 font22 text-center flo_l" v-for="(item,index) in hotList" :key="index" @click="search(item)">{{item}}</div>
    </div>
    <div class="doctorBox" v-if="showDoctorList">
      <div v-if="list.length">
        <DoctorList :list="list"></DoctorList>
      </div>
      <div v-else class="text-center btnBox" style="margin-top: 32px;">
        <span class="font28 color6">暂无搜索信息</span>
      </div>
      <div class="btnBox font12 text-center">
      </div>
    </div>
  </div>
</template>
<script>
import DoctorList from '../../../views/components/doctorList'
import https from '@/config/http.js'

export default {
  components: {
    DoctorList
  },
  data () {
    return {
      searchValue: '',
      hotList: [], // 热门医生
      latelySearch: [], // 最近搜索
      showDoctorList: false,
      list: []
    }
  },
  watch: {
    searchValue () {
      console.log(this.searchValue)
      if (!this.searchValue) this.showDoctorList = false
    }
  },
  methods: {
    onSearch () {
      console.log(this.searchValue)
      this.showDoctorList = true
      this.latelySearch.unshift(this.searchValue)
      localStorage.setItem('latelySearch', JSON.stringify(this.latelySearch))
      console.log(this.latelySearch)
      this.searchDoctors()
    },
    remove () {
      this.latelySearch = []
      localStorage.removeItem('latelySearch')
    },
    search (item) {
      this.searchValue = item
      this.showDoctorList = true
      this.searchDoctors()
    },
    goBack () {
      this.$router.go(-1)
    },
    getData () {
      https.fetchGet('search/listLable').then((data) => {
        console.log(data)
        this.hotList = data
      }).catch(err => {
        console.log(err)
      })
    },
    searchDoctors () {
      let data = {
        keyword: this.searchValue,
        pageNo: 1,
        pageSize: 10
      }
      console.log(data)
      https.fetchGet('/search/searchDoctors', data).then((data) => {
        console.log(data)
        this.list = data.result
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('latelySearch')))
    if (localStorage.getItem('latelySearch')) {
      this.latelySearch = JSON.parse(localStorage.getItem('latelySearch'))
    }
    this.getData()
  }
}
</script>ru
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';

  .listSearch{
    background: white;
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
