<template>
  <div class="mianBox">
    <div class="main-address">
      <div class="addressItem">
        <p class="font28 color6 inline-block">收货人</p>
        <input type="text" placeholder="请填写收货人姓名" class="input font28">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block">手机号码</p>
        <input type="text" placeholder="请填写收货人手机号" class="input font28">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block">所在地区</p>
        <input type="text" placeholder="省市区" class="input font28">
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block">详细地址</p>
        <input type="text" placeholder="街道、楼牌号" class="input font28">
      </div>
      <div class="addAddress text-center theme_bc">
        <div class="colorff font30">保存</div>
      </div>
    </div>
    <div class="active ff">
      <span class="font28 color6">默认地址</span>
      <van-switch v-model="checked" active-color="#00BD75" size="24px" class="flo_r" />
      <!--      <input type="text" placeholder="请填写收货人姓名" class="input font14">-->
    </div>
  </div>
</template>

<script>
import https from '@/config/http.js'
export default {
  data () {
    return {
      checked: false,
      addressList: [
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: true},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false}
      ]
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
      https.fetchGet('address/list').then((data) => {
        console.log(data)
        this.addressList = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mianBox{
    min-height: 100vh;
    background: #F2F2F2;
  }
  .active{
    border-top: 20px solid #f2f2f2;
    padding: 36px 40px;
    border-bottom: 1px solid #f2f2f2;
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 40px;
      padding: 36px 0;
      margin-top: -12px;
      border-bottom: 1px solid #f2f2f2;
      p{width: 150px}
      .img{
        width: 16px;
        height: 26px;
        margin-right: 40px;
        margin-top: 16px;
      }
      .input{
        margin-top: 8px;
        width: 68%;
        border: none;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }

    .addAddress{
      width: 690px;
      height: 88px;
      position: fixed;
      bottom: 40px;
      left: 30px;
      line-height: 88px;
      border-radius: 44px;
    }
  }
</style>
