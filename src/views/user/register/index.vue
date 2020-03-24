<template>
  <div class="mianBox">
    <div class="logo font28 color6 text-center">logo</div>
    <div class="mobileInput font28 color6">
      <input type="number" placeholder="请输入手机号">
    </div>
    <div class="codeInput font28 color6">
      <input type="number" placeholder="请输入验证码">
      <p class="colorTheme flo_r code">获取验证码</p>
    </div>
    <div class="submit font28 colorff text-center">
      注册
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      mobile: '',
      code: ''
    }
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mianBox{
    min-height: 100vh;
    background: #ffffff;
    .logo{
      width:120px;
      height:120px;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 10px 0px rgba(148,148,148,0.5);
      border-radius:10px;
      line-height: 120px;
      margin: 88px auto;
    }
    .mobileInput,.codeInput{
      width:690px;
      height:88px;
      background:rgba(247,247,247,1);
      border-radius:44px;
      margin: 24px auto;
      input{
        width: 88%;
        height: 90px;
        border: none;
        background: none;
        line-height: 90px;
        padding: 0 5%;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }
    .codeInput{
      input{
        width: 58%;
        /*background: red;*/
      }
      .code{
        height: 90px;
        line-height: 90px;
        margin-right: 42px;
      }
    }
    .submit{
      width:690px;
      height:88px;
      background:rgba(0,189,117,1);
      border-radius:44px;
      margin: 64px auto;
      line-height: 88px;
    }
  }
</style>
