<template>
  <div class="mianBox">
    <div class="main-address">
      <div class="addressItem">
        <span class="font14 color6">收货人</span>
        <input type="text" placeholder="请填写收货人姓名" class="input font14">
      </div>
      <div class="addressItem">
        <span class="font14 color6">手机号码</span>
        <input type="text" placeholder="请填写收货人手机号" class="input font14">
      </div>
      <div class="addressItem">
        <span class="font14 color6">所在地区</span>
        <input type="text" placeholder="省市区" class="input font14">
      </div>
      <div class="addressItem">
        <span class="font14 color6">详细地址</span>
        <input type="text" placeholder="街道、楼牌号" class="input font14">
      </div>
      <div class="addAddress text-center theme_bc">
        <div class="colorff font14 ">保存</div>
      </div>
    </div>
    <div class="active ff">
      <span class="font14 color6">默认地址</span>
      <!--      <input type="text" placeholder="请填写收货人姓名" class="input font14">-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressList: [
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: true},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false}
      ]
    }
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  body{
    background: #F2F2F2;
  }
  .mianBox{
    height: 100%;
    background: #F2F2F2;
  }
  .active{
    border-top: 8px solid #EEEEEE;
    padding-left: 26px;
    padding-bottom: 6px;
    border-bottom: 1px solid #EEEEEE;
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 16px;
      padding-left: 10px;
      margin-top: -12px;
      padding-bottom: 6px;
      border-bottom: 1px solid #EEEEEE;
      .input{
        margin-top: 8px;
        width: 70%;
        border: none;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }

    .addAddress{
      width: 90%;
      height: 40px;
      background: white;
      position: fixed;
      bottom: 3%;
      left: 5%;
      line-height: 40px;
      border-radius: 38px;
    }
  }
</style>
