<template>
  <div class="_main">
    <div class="_mainState">
      <span class="font30 color3">订单状态</span>
      <span class="flo_r font32 colorTheme">已支付</span>
    </div>
    <div class="_mainDoctor">
      <p class="color9 font28 title">咨询医生</p>
      <div class="flo_l image">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="image" alt="">
      </div>
      <div class="flo_l content text-left">
        <p class="font30 color3 bold name inline-block">国红   主任医师</p>
        <p class="font24 color6 text">北京医院 内科</p>
        <p class="font24 color9 text ellipsis_1">擅长：脑血管栓、头疼、头晕、睡眠障碍、高…</p>
      </div>
    </div>
    <div class="_mainOrder">
      <div>
        <span class="color6 font28">订单编号</span>
        <span class="font28 color3 num">123443242424</span>
        <span class="color3 font26 laber">复制</span>
      </div>
      <div>
        <span class="color6 font28">下单时间</span>
        <span class="font28 color3 num">2020.02.01 12:22</span>
      </div>
    </div>
    <div class="_mainOrder">
      <div class="price">
        <span class="color6 font28">订单金额</span>
        <span class="font28 color3 flo_r">¥49</span>
      </div>
      <div class="price">
        <span class="color6 font28">订单优惠</span>
        <span class="font28 color3 flo_r">¥49</span>
      </div>
      <div class="totalPrice">
        <p class="font28 color6 flo_r">实付款：<span class="colorRed font30">¥49</span></p>
      </div>
    </div>
    <div class="_mainCondition">
      <p class="color9 font28 title">病情描述</p>
      <p class="font28 color3 sketch">张医生您好，怀孕八周，因患有鼻炎经常打喷嚏，今天
        早上打喷嚏没控制好力度小腹痛了，有问题么</p>
<!--      <div class="image">-->
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="image flo_l" alt="">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="image flo_l" alt="">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="image flo_l" alt="">
      <p class="clearfloat"></p>
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    }
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
