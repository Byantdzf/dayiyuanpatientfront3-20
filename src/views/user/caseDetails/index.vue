<template>
  <div class="_CaseDetail">
    <div class="_userInfo ff">
      <div class="color3 font28"><p class="color6 inline-block">姓名：</p>{{CaseDetail.patientName}}</div>
      <div class="color3 font28"><p class="color6 inline-block">性别：</p>{{CaseDetail.sex==1?'男':'女'}}</div>
      <div class="color3 font28"><p class="color6 inline-block">年龄：</p>{{CaseDetail.age}}</div>
      <div class="color3 font28"><p class="color6 inline-block">住院号：</p>{{CaseDetail.age}}</div>
      <div class="text-center" style="" @click="unfold = !unfold">
        <img src="@/assets/image/serviceIcon/downIcon.png" width="14" height="7" alt="">
      </div>
    </div>
    <div class="_source ff">
      <p class="color3 font26 flo_l">病例来源</p>
      <p class="color3 font26 flo_r text-right">{{CaseDetail.source == 0?'手工录入':'自动录入'}}</p>
    </div>
    <div class="_content ff">
      <p class="color3 font26"><span class="color6">主述：</span>{{CaseDetail.diseaseDesc}}</p>
<!--      <p class="color3 font26"><span class="color6">现病史：</span>{{CaseDetail}}</p>-->
      <p class="color3 font26"><span class="color6">中医诊断：</span>{{CaseDetail.chineseDiagnosis}}</p>
      <p class="color3 font26"><span class="color6">西医诊断：</span>{{CaseDetail.westernDiagnosis}}</p>
      <p class="color3 font26"><span class="color6">医生嘱咐：</span>{{CaseDetail.doctorAdvice}}</p>
    </div>
    <div class="addFn text-center theme_bc" @click="gotoPage('/user/addCaseFile')">
      <div class="colorff font30">修改病例</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      unfold: false,
      caseId: 0, // 病例详情id
      CaseDetail: [] // 病例详情
    }
  },
  watch: {
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    getCaseDetail () { // 获得患者数据
      this.$https.fetchGet(`patientCase/queryCaseDetail?caseId=${this.caseId}`).then((data) => {
        console.log(data)
        this.CaseDetail = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.caseId = this.$route.query.id
    this.getCaseDetail()
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  ._CaseDetail{
    min-height: 100vh;
    background: #F2F2F2;
    ._userInfo,._source,._content{
      padding: 30px 40px;
      margin-bottom: 20px;
      p{
        margin: 6px 0;
        width: 140px;
      }
    }
    ._source{
      padding: 30px 40px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    ._content{
      p{
        width: 100%;
        margin: 6px 0;
      }
    }
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
</style>
