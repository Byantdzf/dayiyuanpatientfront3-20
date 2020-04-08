<template>
  <div class="main">
    <div class="mainBox">
      <div class="text-center colorff state">
        <img src="@/assets/image/orderIcon/successIcon.png" alt="">
        <p class="_text inline-block">支付成功</p>
      </div>
      <p class="text-center price">
        <span class="font28 colorff">实付款</span>
        <span class="font32 colorff">￥{{orderData.price}}</span>
      </p>
    </div>
    <div class="ff DrugOrder">
      <div class="color6 font26 _title">
        <span>订单编号  </span>
        <span class="color3 _value">{{orderData.orderNo}}</span>
        <!--<p class="inline-block font26 color3 copy text-center">复制</p>-->
      </div>
      <div class="color6 font26 _title">
        <span>下单时间  </span>
        <span class="color3 _value">{{orderData.createTime}}</span>
      </div>
    </div>
    <div class="infoWrapper">
      <div class="flo_l">
        <img :src="orderData.avatar" class="photo" alt="">
      </div>
      <div class="flo_l content text-left ">
        <div class="font30 color3">
          <span class="font30 color3">{{orderData.doctorName}}</span>
          <span class="font30 color3 _class">{{orderData.title}}</span>
          <img src="@/assets/image/homeIcon/scoreIcon.png" class="icon" alt="">
          <span class="score font26">{{orderData.praiseCount || 0}}</span>
        </div>
        <p class="font26 title ">{{orderData.orgName}}</p>
        <p class="font22 color9 merit flo_l ellipsis_1">擅长：{{orderData.speciality}}</p>
      </div>
      <div class="clearfloat"></div>
    </div>
    <div class="colorff text-center font30 _home" @click="gotoPage('/home/entry')">查看咨询对话</div>
    <div class="colorff text-center font30 _home" @click="gotoPage('/home/entry')">主页</div>
    <div class="color3 font30 _order text-center" @click="gotoPage('/user/consultOrders')">我的订单</div>
    <p class="font28 color9 text-center text-center">本次支付已成功，详细信息请进入我的订单查看</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      orderData: {}
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder (name) {
      this.$router.push({ name: name })
    },
    getData () {
      this.$https.fetchGet(`order/queryPatientOrderDetail?orderId=1`).then((data) => {
        console.log(data)
        this.orderData = data
        console.log(this.orderData)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getData()
    window.addEventListener('scroll', this.menu)
  }
}
</script>

<style lang="less" scoped>
  @import '../../../assets/style/reset';
  .main{
    min-height: 100vh;
    background: #ffffff;
  }
  .mainBox{
    width:750px;
    height:220px;
    background:rgba(0,189,117,1);
    .state{
      padding-top: 30px;
      ._text{
        margin-top: 22px;
      }
      img{
        width: 103px;
        height: 87px;
        vertical-align: middle;
        margin-top: -12px;
      }
    }
    .price{
      margin-top: 20px;
    }
    .btnBox{
      width:276px;
      height:71px;
      background:rgba(255,255,255,1);
      border-radius:36px;
      line-height: 71px;
      margin: 40px auto;
    }
  }
  .DrugOrder{
    padding: 20px 30px;
    line-height: 50px;
    border-bottom: 20px solid #f7f7f7;
    ._value{
      margin-left: 14px;
    }
    .copy{
      width:88px;
      height:34px;
      border-radius:6px;
      line-height: 34px;
      margin-left: 22px;
      border:1px solid rgba(151,151,151,1);
    }
  }
  .mainDrug{
    margin-top: 20px;
    padding: 20px 0px 0px 30px;
    ._title,._titleV{
      padding-right: 30px;
      overflow: hidden;
      margin-bottom: 4px;
    }
    ._titleV{
      padding: 20px 30px 4px 0;
    }
  }
  ._home,._order{
    width:690px;
    height:90px;
    line-height: 90px;
    background:rgba(0,189,117,1);
    border-radius:10px;
    margin: auto;
    margin-top: 40px;
  }
  ._order{
    margin-bottom: 24px;
    background:rgba(243,243,243,1);
  }
  .infoWrapper{
    padding: 30px;
    background: white;
    border-bottom: 1px solid #E7E7E7;
    .photo{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid #ffffff;
    }
    .score{
      color: #FF8A30;
      margin-right: 20px;
    }
    .content{
      width: 76%;
      padding: 6px 22px;
      ._class{
        margin-left: 22px;
      }
      .title{
        color: #666666;
        margin: 4px 0;
      }
      .icon{
        width: 22px;
        height: 22px;
      }
      .merit{
        margin-top: 20px;
        width: 76vw;
      }
    }
    .commentsBox{
      width:670px;
      height:120px;
      background:rgba(137,137,137,.2);
      border-radius:60px;
      color: white;
      margin-top: 18px;
      .itemStyle{
        width: 30%;
        display: inline-block;
        margin-top: 26px;
      }
    }
  }
</style>
