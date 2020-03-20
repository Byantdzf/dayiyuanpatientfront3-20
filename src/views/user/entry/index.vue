<template>
  <div id="mineEntry">
    <div class="avatar-wrapper">
      <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3118813608,3660597234&fm=26&gp=0.jpg">
      <div class="user-info">
        <span>陈不二</span>
        <p style="font-size: 12px;color: white" @click="gotoPage('/mine/setting')">查看并编辑个人信息</p>
<!--        <van-rate :value='5' />-->
      </div>
<!--      <router-link :to="{name:'mineSetting'}">-->
<!--        <van-icon class="setting" name="setting" />-->
<!--      </router-link>-->
    </div>
<!--    <div class="sub-nav">-->
<!--      <subNavItem @click.native="goToMyOrder">-->
<!--        我的订单-->
<!--      </subNavItem>-->
<!--      <subNavItem @click.native="goToMyOrder" :info='5'>-->
<!--        待服务-->
<!--      </subNavItem>-->
<!--    </div>-->
    <div class="">
      <div class="font16 inline-block text-center" style="width: 48%" @click="gotoPage('/mine/consultOrders')">待支付问诊</div>
      <div class="font16 inline-block text-center" style="width: 49%">待支付的药单</div>
    </div>
    <div class="list ff">
<!--      <ul class="account-item">-->
<!--        <li>1</li>-->
<!--        <li>2</li>-->
<!--        <li>3</li>-->
<!--        <li>4</li>-->
<!--      </ul>-->
      <div class="main-cell font14" @click="gotoPage('/mine/consultOrders')">问诊订单</div>
      <div class="main-cell font14" @click="gotoPage('/mine/prescription')">我的处方</div>
      <div class="main-cell font14" @click="gotoPage('/mine/caseFile')">病例档案</div>
      <div class="main-cell font14" @click="gotoPage('/mine/patientsMsg')">患者信息</div>
      <div class="main-cell font14" @click="gotoPage('/mine/address')">我的地址</div>
      <div class="main-cell font14" @click="gotoPage('/mine/feedback')">用户反馈</div>
      <div class="main-cell font14" @click="gotoPage('/mine/bill')">关于我们</div>
<!--      <van-cell title="问诊订单" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="我的处方" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="病例档案" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="患者信息" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="我的地址" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="用户反馈" icon='credit-pay' is-link></van-cell>-->
<!--      <van-cell title="关于我们" icon='credit-pay' is-link></van-cell>-->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // subNavItem: {
    //   props: ['info'],
    //   render () {
    //     return (
    //       <div class="sub-nav-item">
    //         <div class="icon-wrapper">
    //           {this.info && <i class="info">{this.info}</i>}
    //           {this.$slots.icon}
    //         </div>
    //         <span class="text">{this.$slots.default}</span>
    //       </div>
    //     )
    //   }
    // }
  },
  created () {},
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

<!--<style lang="scss" src='./index.scss'></style>-->

<style lang="less">
  @import '../../../../src/assets/style/reset';
  body{
    background:rgba(247,247,247,1);
  }
  .main-cell{
    margin-left: 12px;
    padding: 10px 12px 10px 0px;
    border-bottom: 1px solid rgba(247,247,247,1);;
  }
  .dost{
    border-bottom: 12px solid #e3e3e3;
  }
</style>
