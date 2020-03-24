<template>
  <div class="main">
    <div class="mainBox">
      <div class="text-center colorff state">
        <img src="@/assets/image/orderIcon/successIcon.png" alt="">
        <p class="_text inline-block">支付成功</p>
      </div>
      <p class="text-center price">
        <span class="font28 colorff">实付款</span>
        <span class="font32 colorff">￥690</span>
      </p>
    </div>
    <div class="ff DrugOrder">
      <div class="color6 font26 _title">
        <span>订单编号  </span>
        <span class="color3 _value">123443242424</span>
        <p class="inline-block font26 color3 copy text-center">复制</p>
      </div>
      <div class="color6 font26 _title">
        <span>下单时间  </span>
        <span class="color3 _value">2020.02.01 12:22</span>
      </div>
    </div>
    <div class="colorff text-center font30 _home" @click="gotoPage('/home/entry')">返回主页</div>
    <div class="color3 font30 _order text-center">我的订单</div>
    <p class="font28 color9 text-center text-center">本次支付已成功，详细信息请进入我的订单查看</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder (name) {
      this.$router.push({ name: name })
    }
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
    margin: 80px auto;
  }
  ._order{
    margin-top: -40px;
    margin-bottom: 24px;
    background:rgba(243,243,243,1);
  }
</style>
