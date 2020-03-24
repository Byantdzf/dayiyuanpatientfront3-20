<template>
  <div class="main">
    <div class="mainBox">
      <p class="text-center colorff state">等待支付</p>
      <p class="text-center price">
        <span class="font28 colorff">需付款</span>
        <span class="font32 colorff">￥690</span>
        <span class="font28 colorff" style="margin-left: 32px;">剩余：23小时59分钟</span>
      </p>
      <p class="btnBox colorTheme font28 text-center bold" @click="gotoPage('/order/paySuccess')">去付款</p>
    </div>
    <div class="mainAddress ff">
      <img src="@/assets/image/userIcon/addressIcon.png" alt="" class="image">
      <p class="inline-block font30"><span class="bold color3">李四</span><span class="mobile">13232424224</span></p>
      <p class="inline-block font26 color6 address">地址：广东省湄洲市五华县邮政东门附近</p>
    </div>
    <div class="ff mainDrug">
      <div class="color6 font26 _title">
        <span class="flo_l">叮当快药</span>
        <span class="flo_r">商家自配</span>
      </div>
      <div class="listDrug" v-for="(item,index) in 2" :key="index">
        <div class="img flo_l"></div>
        <p class="color3 font28 flo_l title ellipsis_1">【仁和可立克】复方氨基酸完泰安胶囊</p>
        <p class="colorRed font30 bold flo_r">￥28</p>
        <div class="msg flo_l">
          <p class="font26 color9 inline-block">12粒X2板</p>
          <p class="font24 color6 inline-block num">数量X1</p>
        </div>
        <p class="clearfloat"></p>
      </div>
      <div class="_dot"></div>
      <div class="color6 font26 _titleV">
        <span class="flo_l">配送费</span>
        <span class="flo_r">￥6</span>
      </div>
      <div class="color6 font26 _titleV">
        <span class="flo_l">优惠费用</span>
        <span class="flo_r">￥0.5</span>
      </div>
      <div class="_dot"></div>
      <div class="mainBtn">
        <div class="text-center font26 color3 flo_r btnStyle">查看处方</div>
      </div>
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
    <p class="height160"></p>
    <div class="btnBoxFn ff">
      <div class="_btn colorff flo_r text-center" @click="gotoPage('/order/paySuccess')">去支付</div>
      <div class="font32 color3 flo_r">合计： <span class="price colorRed">￥120</span></div>
    </div>
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
    background: #f7f7f7;
  }
  .mainBox{
    width:750px;
    height:289px;
    background:rgba(0,189,117,1);
    .state{
      padding-top: 30px;
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
  .mainAddress{
    padding: 28px 30px;
    .image{
      width: 24px;
      height: 30px;
      margin-bottom: -4px;
    }
    .mobile{
      margin-left: 22px;
    }
    .address{
      margin-left: 32px;
    }
  }
  .DrugOrder{
    margin-top: 20px;
    padding: 20px 30px;
    line-height: 50px;
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
    ._dot{
      width:720px;
      height:1px;
      background:rgba(231,231,231,1);
      margin-top: 32px;
    }
    .listDrug{
      margin-top: 36px;
      overflow: hidden;
      padding-right: 30px;
      .img{
        width:100px;
        height:100px;
        background-image: url("http://img4.imgtn.bdimg.com/it/u=3575090368,4183558696&fm=26&gp=0.jpg");
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px solid #e1e1e1;
      }
      .title{
        width: 500px;
        margin-left: 12px;
      }
      .msg{
        margin-top: 18px;
        margin-left: 18px;
        .num{
          margin-left: 22px;
        }
      }
    }
    .mainBtn{
      overflow: hidden;
      padding: 22px 30px;
      margin-bottom: 20px;
      .btnStyle{
        width:159px;
        height:60px;
        line-height: 60px;
        border-radius:33px;
        border:1px solid rgba(151,151,151,1);
        background: white;
      }
    }
  }
  .btnBoxFn{
    width: 100%;
    height: 100px;
    line-height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    .price{padding-right: 42px}
    ._btn{
      width:224px;
      height:100px;
      background:rgba(0,189,117,1);
    }
  }
</style>
