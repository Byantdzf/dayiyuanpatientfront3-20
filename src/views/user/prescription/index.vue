<template>
  <div class="_prescription">
    <van-tabs v-model="activeName" color="#00BD75" style="border-bottom: 1px solid #D6D6D6;">
      <van-tab :title="item"  v-for="(item,index) in tabs" color="#00BD75" :key="index">
        <template is="list" ></template>
      </van-tab>
    </van-tabs>
    <template name="list">
      <div v-if="list.length>0">
        <div v-for="(item,index) in list" :key="index">
          <div class="wrapper ff" @click="gotoPage('/user/prescriptionDetail')">
            <div class="listItem">
              <div class="flo_l">
                <img :src="item.avatar" class="image" alt="">
              </div>
              <div class="flo_l content text-left ">
                <p class="font30 color3 bold name inline-block">{{item.doctorName}}</p>
                <p class="font24 label inline-block text-center">图文问诊</p>
                <p class="colorTheme font26 flo_r bold">{{item.statusText}}</p>
                <p class="font26 color6 title">{{item.title}}</p>
                <p class="font26 color9 title">擅长：{{item.skill}}</p>
                <p class="font26 color3 title">诊断医嘱：{{item.medicalRecord}} {{item.enjoin}}</p>
                <p class="font24 color9 title">2020.02.22 13.34</p>
              </div>
              <div class="_dotV flo_r" ></div>
              <div class="flo_l content contentV  text-left">
                <p class="font30 name inline-block">处方价格：{{item.actualTotal}}元</p>
                <p class="btnStyle font26 colorff text-center flo_r" v-if="item.FnText">
                  {{item.FnText}}
                </p>
              </div>
              <p class="clearfloat"></p>
            </div>
          </div>
          <div class="_dot" v-if="index != list.length"></div>
          <p class="clearfloat"></p>
        </div>
      </div>
      <div v-else class="noneDataIcon">
        <img src="../../../assets/image/pic_noneData.png" alt="">
        <p class="color9 font30">暂无内容</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: 0,
      FnText: '',
      statusText: '',
      activeName: 'a',
      tabs: ['全部', '待支付', '待发货', '待收货', '待评价', '已完成', '已取消'],
      list: []
    }
  },
  watch: {
    activeName () {
      console.log(this.activeName)
      this.status = this.activeName
      this.getData(1)
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    shiftText (item) {
      switch (item.status) {
        case 1:
          item.statusText = '待支付'
          item.FnText = '去支付'
          break
        case 2:
          item.statusText = '待发货'
          item.FnText = '详情'
          break
        case 3:
          item.statusText = '待收货'
          item.FnText = '详情'
          break
        case 4:
          item.statusText = '待评价'
          item.FnText = '去评价'
          break
        case 5:
          item.statusText = '已完成'
          item.FnText = ''
          break
        case 6:
          item.statusText = '已取消'
          item.FnText = ''
          break
      }
    },
    getData (pageNo) {
      let data = {
        status: this.status == 0 ? '' : this.status,
        pageNo: pageNo,
        pageSize: 10
      }
      this.$https.fetchGet(`prescription/queryMyPrescriptionPage`, data).then((data) => {
        console.log(data)
        this.list = data.result
        for (let item of this.list) {
          this.shiftText(item)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getData(1)
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  ._prescription{
    background:rgba(247,247,247,1);
    min-height: 100vh;
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
      padding-right: 30px;
      .name{
        margin-bottom: 6px;
      }
      .title{
        margin-bottom: 10px;
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
    background: #f7f7f7;
    padding-top: 20px;
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
