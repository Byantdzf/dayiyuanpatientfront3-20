<template>
  <div class="mianBox">
    <div class="main-address">
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>姓名</p>
        <input type="text" placeholder="请填写姓名" class="input font28 flo_r">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>身份证</p>
        <input type="text" placeholder="请输入有效证件" class="input font28 flo_r">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>性别</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="男" class="input font28 flo_r">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>年龄</p>
        <input type="text" placeholder="请输入年龄" class="input font28 flo_r">
      </div>
      <div class="addAddress text-center theme_bc">
        <div class="colorff font30">保存</div>
      </div>
    </div>
    <div class="active ff">
      <span class="font28 color6">设为默认患者</span>
      <van-switch v-model="checked" active-color="#00BD75" size="24px" class="flo_r" />
      <!--      <input type="text" placeholder="请填写收货人姓名" class="input font14">-->
    </div>
  </div>
</template>

<script>
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
    border-top: 30px solid #f2f2f2;
    padding: 24px 30px;
    border-bottom: 1px solid #f2f2f2;
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 30px;
      padding: 23px 0;
      padding-right: 30px;
      border-bottom: 1px solid #f2f2f2;
      p{width: 150px}
      .img{
        width: 16px;
        height: 26px;
        margin-left: 8px;
        margin-top: 16px;
      }
      .input{
        margin-top: 8px;
        width: 68%;
        border: none;
        text-align: right;
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
