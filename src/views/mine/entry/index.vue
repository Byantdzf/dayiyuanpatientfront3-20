<template>
  <div id="mineEntry">
    <div class="avatar-wrapper">
      <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3118813608,3660597234&fm=26&gp=0.jpg">
      <div class="user-info">
        <span>陈不二</span>
        <p style="font-size: 12px;color: white">查看并编辑个人信息</p>
<!--        <van-rate :value='5' />-->
      </div>
<!--      <router-link :to="{name:'mineSetting'}">-->
<!--        <van-icon class="setting" name="setting" />-->
<!--      </router-link>-->
    </div>
<!--    <div class="sub-nav">-->
<!--      <subNavItem @click.native="goToMyOrder">-->
<!--        <img src="./img/我的订单.png" slot="icon"> 我的订单-->
<!--      </subNavItem>-->
<!--      <subNavItem @click.native="goToMyOrder" :info='5'>-->
<!--        <img src="./img/待服务.png" slot="icon"> 待服务-->
<!--      </subNavItem>-->
<!--      <subNavItem @click.native="goToMyOrder" :info='50'>-->
<!--        <img src="./img/待评价.png" slot="icon"> 待评价-->
<!--      </subNavItem>-->
<!--    </div>-->
    <div class="list">
<!--      <ul class="account-item">-->
<!--        <li>1</li>-->
<!--        <li>2</li>-->
<!--        <li>3</li>-->
<!--        <li>4</li>-->
<!--      </ul>-->
      <van-cell title="我的订单" icon='credit-pay' is-link></van-cell>
      <van-cell title="我的病历" icon='credit-pay' is-link></van-cell>
      <van-cell title="我的处方" icon='credit-pay' is-link></van-cell>
      <van-cell title="患者信息" icon='credit-pay' is-link></van-cell>
      <van-cell title="服务评价" icon='credit-pay' is-link></van-cell>
      <van-cell title="用户反馈" icon='credit-pay' is-link></van-cell>
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
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    }
  }
}
</script>

<style lang="scss" src='./index.scss'></style>
