<template>
  <div class="_main">
    <div class="_mainState">
      <span class="font30 color3">订单状态</span>
      <span class="flo_r font32 colorTheme">{{patientOrderDetail.statusText}}</span>
    </div>
    <div class="_mainDoctor">
      <p class="color9 font28 title">咨询医生</p>
      <div class="flo_l image">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="image" alt="">
      </div>
      <div class="flo_l content text-left">
        <p class="font30 color3 bold name inline-block">{{patientOrderDetail.doctorName}}   主任医师</p>
        <p class="font24 color6 text">{{patientOrderDetail.orgName}} {{patientOrderDetail.deptName}}</p>
        <p class="font24 color9 text ellipsis_1">擅长：{{patientOrderDetail.speciality}}</p>
      </div>
    </div>
    <div class="_mainOrder">
      <div>
        <span class="color6 font28">订单编号</span>
        <span class="font28 color3 num">{{patientOrderDetail.orderNo}}</span>
<!--        <span class="color3 font26 laber">复制</span>-->
      </div>
      <div>
        <span class="color6 font28">下单时间</span>
        <span class="font28 color3 num">{{patientOrderDetail.cancelTime}}</span>
      </div>
    </div>
    <div class="_mainOrder">
      <div class="price">
        <span class="color6 font28">订单金额</span>
        <span class="font28 color3 flo_r" v-if="patientOrderDetail.price">¥{{patientOrderDetail.price}}</span>
        <span class="font28 color3 flo_r" v-else>免费</span>
      </div>
      <div class="price">
        <span class="color6 font28">订单优惠</span>
        <span class="font28 color3 flo_r">¥0</span>
      </div>
      <div class="totalPrice">
        <p class="font28 color6 flo_r">实付款：<span class="colorRed font30">¥{{patientOrderDetail.price}}</span></p>
      </div>
    </div>
    <div class="_mainCondition">
      <p class="color9 font28 title">病情描述</p>
      <p class="font28 color3 sketch">{{patientOrderDetail.diseaseDesc}}</p>
<!--      <div class="image">-->
      <img :src="patientOrderDetail.url" class="image flo_l" alt="">
      <p class="clearfloat"></p>
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      patientOrderDetail: {}
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    getData () {
      this.$https.fetchGet(`order/queryPatientOrderDetail?orderId=${this.id}`).then((data) => {
        console.log(data)
        this.patientOrderDetail = data
        switch (data.status) {
          case '0':
            this.patientOrderDetail.statusText = '待支付'
            break
          case '1':
            this.patientOrderDetail.statusText = '待发货'
            break
          case '2':
            this.patientOrderDetail.statusText = '待收货'
            break
          case '3':
            this.patientOrderDetail.statusText = '待评价'
            break
          case '4':
            this.patientOrderDetail.statusText = '已完成'
            break
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getData(1)
    console.log(this.id)
  }
}
</script>

<style lang="less" scoped="scoped">
  @import '../../../../src/assets/style/reset';
  ._main{
    ._mainState,._mainDoctor,._mainOrder,._mainCondition{
      padding: 30px;
      border-bottom: 20px solid #F2F2F2;
    }
    ._mainDoctor{
      overflow: hidden;
      .title{padding-bottom: 26px}
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
        .text{
          margin-bottom: 21px;
        }
      }
    }
    ._mainOrder{
      padding: 18px 38px;
      .num{margin: 0 12px 0 12px}
      .laber{
        padding: 0 12px;
        border-radius:6px;
        border:1px solid rgba(151,151,151,1);
      }
      .price {
        margin-bottom: 12px;
        overflow: hidden;
      }
      .totalPrice{
        border-top: 1px solid #E7E7E7;
        padding: 22px 0;
        margin-top: 22px;
        overflow: hidden;
      }
    }
    ._mainCondition{
      border-bottom: none;
      .title{
        margin-bottom: 8px;
      }
      .sketch{
        margin-bottom: 80px;
      }
      .image{width: 169px;height: 160px;margin-right: 22px;}
    }
  }
</style>
