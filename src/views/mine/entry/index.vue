<template>
  <div id="mineEntry">
    <div class="avatar-wrapper">
      <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3118813608,3660597234&fm=26&gp=0.jpg" class="img flo_l">
      <div class="user-info flo_l">
        <p class="colorff font32">陈不二</p>
        <p class="colorff font26 _msg"  @click="gotoPage('/user/setting')">查看并编辑个人信息</p>
      </div>
      <p class="clearfloat"></p>
    </div>
    <div class="fa-table">
      <p class="title font26 color3">我的订单</p>
      <div class="font24 color3 flo_l text-center _itemL" @click="gotoPage('/user/consultOrders')">
        <img src="@/assets/image/userIcon/tabIconL.png" alt="">
        <p class="badge inline-block colorff font22">2</p>
        <p>待支付问诊</p>
      </div>
      <div class="font24 color3 flo_r text-center _itemR">
        <img src="@/assets/image/userIcon/tabIconR.png" alt="">
        <p class="badge inline-block colorff font22">9</p>
        <p>待支付的药品订单</p>
      </div>
      <p class="clearfloat"></p>
    </div>
    <div class="list ff">
      <div v-for="(item,index) in listItem" :key="index">
        <div class="listItem font30" :class="index == 4?'noBorder':''" @click="gotoPage(item.page)">
          <img :src="item.icon" alt="">
          <p class="inline-block">{{item.title}}</p>
        </div>
        <div class="_dost" v-if="index == 4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      listItem: [
        {title: '问诊订单', page: '/user/consultOrders', icon: require('@/assets/image/userIcon/itemIcon1.png')},
        {title: '我的处方', page: '/user/prescription', icon: require('@/assets/image/userIcon/itemIcon2.png')},
        {title: '病例档案', page: '/user/caseFile', icon: require('@/assets/image/userIcon/itemIcon3.png')},
        {title: '患者信息', page: '/user/patientsMsg', icon: require('@/assets/image/userIcon/itemIcon4.png')},
        {title: '我的地址', page: '/user/address', icon: require('@/assets/image/userIcon/itemIcon5.png')},
        {title: '用户反馈', page: '/user/feedback', icon: require('@/assets/image/userIcon/itemIcon6.png')},
        {title: '关于我们', page: '/user/about', icon: require('@/assets/image/userIcon/itemIcon7.png')}
      ]
    }
  },
  created () {
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

<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  #mineEntry{
    min-height: 100vh;
    background: #f7f7f7;
  }
  .avatar-wrapper{
    background: #00BD75;
    padding: 33px 40px 50px 33px;
    .img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid white;
    }
    .user-info{
      margin-left: 33px;
    }
    ._msg{
      margin-top: 16px;
      color: #B3E6D3;
    }
  }
  .fa-table{
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background: white;
    width: 100%;
    margin-top: -28px;
    overflow: hidden;
    padding-bottom: 20px;
    margin-bottom: 20px;
    .title{
      margin: 15px 64px;
    }
    ._itemR,._itemL{
      margin-top: 8px;
      position: relative;
      .badge{
        text-align: center;
        position: absolute;
        right: 12px;
        top: -8px;
        background: #FF0000;
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
      }
    }
    ._itemL{
      margin-left: 116px;
    }
    ._itemR{
      margin-right: 119px;
      .badge{
        right: 46px;
      }
    }
    img{
      width: 70px;
      height: 70px;
      margin-bottom: 12px;
    }
  }
  .list{
    overflow: hidden;

    ._dost{
      height: 20px;
      background: #f7f7f7;
    }
    .listItem {
      margin: 23px 0px 0 30px;
      padding-bottom: 23px;
      padding-right: 30px;
      border-bottom: 1px solid #f4f4f4;
      position: relative;
      color: #333333;
      img{
        width: 27px;
        margin-right: 18px;
        margin-bottom: -6px;
      }
      &:before{
        content: '';
        right: 30px;
        top:  10px;
        width: 16px;
        height: 26px;
        position: absolute;
        background-image: url("../../../assets/image/homeIcon/rightIcon.png");
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .noBorder{
      border: none;
    }
  }
</style>
