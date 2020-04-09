<template>
  <div class="mainBox">
    <van-dropdown-menu style="margin-bottom: 10px;">
      <van-dropdown-item v-model="value" :options.sync="option" />
    </van-dropdown-menu>
    <div class="_userInfo ff">
      <p class="color3 font26" v-if="option[value]"><span class="color6">姓名：</span>{{option[value].text}}</p>
      <p class="color3 font26"><span class="color6">性别：</span>{{option[value].sex==1?'男':'女'}}</p>
      <p class="color3 font26"><span class="color6">年龄：</span>{{option[value].age}}</p>
    </div>
    <template name="list">
      <div  v-for="(item,index) in list" :key="index">
        <div class="wrapper ff" @click="gotoPage(`/user/caseDetails?id=${item.patientCaseId}`)">
          <div class="listItem">
            <div class="flo_l">
              <img src="@/assets/image/homeIcon/photo.png" class="image" alt="">
            </div>
            <div class="flo_l content text-left ">
              <p class="font30 color3 bold name inline-block">{{item.receptionDoctor}}</p>
              <p class="font26 color6 title">{{item.receptionOrg}} {{item.receptionDept}}</p>
              <p class="font26 color9 title">病情描述：<span class="color3">{{item.diseaseDesc}}</span></p>
              <p class="font26 color9 title">诊断：<span class="color3">{{item.chineseDiagnosis || item.westernDiagnosis}}</span></p>
              <p class="font24 color9 title flo_l" v-if="option[value]">就诊人: {{option[value].text}}  {{option[value].age}}({{option[value].sex==1?'男':'女'}})</p>
              <p class="font24 color9 title flo_r">{{item.receptionTime}}</p>
            </div>
            <div class="_dotV flo_r" ></div>
            <p class="clearfloat"></p>
          </div>
        </div>
        <div class="_dot" v-if="index != list.length"></div>
        <p class="clearfloat"></p>
      </div>
      <div v-if="list.length < 1" class="noneDataIcon">
        <img src="../../../assets/image/pic_noneData.png" alt="">
        <p class="color9 font30">暂无病例信息</p>
      </div>
    </template>
    <div class="addFn text-center theme_bc" @click="gotoPage('/user/addCaseFile')">
      <div class="colorff font30">新增病例</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      patientList: [], // 患者信息
      patientId: 0, // 患者id
      option: [],
      list: [
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 3
        }
      ]
    }
  },
  watch: {
    value () {
      this.patientId = this.patientList[this.value].patientId
      console.log(this.patientId)
      this.getCaseList()
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    getCaseList () { // 获得患者对应的数据
      this.$https.fetchGet(`patientCase/queryCaseList?patientId=${this.patientId}`).then((data) => {
        this.list = data
        // console.log(this.list)
      }).catch(err => {
        console.log(err)
      })
    },
    getPatientList () { // 获得患者数据
      this.$https.fetchGet('patient/queryPatientList').then((data) => {
        console.log(data)
        this.patientList = data
        for (let index in data) {
          if (data[index].patientName) {
            this.option.push({
              text: data[index].patientName,
              value: index,
              sex: data[index].sex,
              age: data[index].age,
              patientId: data[index].patientId
            })
            if (data[index].isDefault == 1) {
              this.value = index
            }
          }
          console.log(this.option, this.value)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getPatientList()
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mainBox{
    min-height: 100vh;
    background: #F2F2F2;
  }
  ._userInfo{
    line-height: 42px;
    padding: 20px 30px;
    margin-bottom: 20px;
  }
  .van-tab--active {
    font-weight: 500;
    color: #00BD75;
  }
  .wrapper{
    .listItem{
      overflow: hidden;
      padding-top: 30px;
      margin-left: 30px;
      /*border-bottom: 1px solid #E7E7E7;*/
    }
    ._dotV{
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #E7E7E7;
    }
    .image{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .content{
      width: 80%;
      padding: 0px 24px;
      margin-top: -6px;
      padding-right: 26px;
      .name{
        margin-bottom: 6px;
      }
      .label{
        color: #ffffff;
        width:100px;
        height:30px;
        background:linear-gradient(90deg,rgba(245,175,51,1) 0%,rgba(236,150,10,1) 100%);
        border-radius:4px;
        vertical-align: middle;
        padding: 2px 8px;
        margin-bottom: 6px;
      }
    }
    .van-rate{ display: inline-block;margin-left: 6px;}
  }
  .title{
    padding-bottom: 16px;
  }
  .contentV{
    overflow: hidden;
    margin-left: 86px;
    height: 100px;
    line-height: 100px;
    .name{color: #FF0000}
  }
  .btnStyle{
    width:159px;
    height:61px;
    background:rgba(0,189,117,1);
    border-radius:33px;
    line-height: 61px;
    margin-top: 24px;
  }
  ._dot{
    width: 100%;
    height: 1px;
    margin: auto;
    /*background: #EFEFEF;*/
    padding-top: 20px;
  }
  ._userInfo{

  }
  .addFn{
    width: 690px;
    height: 88px;
    position: fixed;
    bottom: 40px;
    left: 30px;
    line-height: 88px;
    border-radius: 44px;
  }
  .noneDataIcon{
    text-align: center;
    img {
      width: 200px;
      height: 200px;
      margin: auto;
      margin-top: 12vh;
    }
  }
</style>
