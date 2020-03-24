<template>
  <div class="mianBox">
    <div class="main-info">
      <div class="userInfo">
        <p class="font28 color3 inline-block">用户头像</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r" style="margin-top: 18px;">
        <img src="@/assets/image/homeIcon/photo.png" alt="" class="photo flo_r">
      </div>
      <div class="userInfo">
        <p class="font28 color3 inline-block">用户昵称</p>
        <input type="text" placeholder="请填写姓名" value="mamba" class="input font28 flo_r">
      </div>
      <div class="userInfo">
        <p class="font28 color3 inline-block">用户性别</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="男" class="input font28 flo_r">
      </div>
      <div class="userInfo">
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <p class="font28 color3 inline-block">用户地址</p>
      </div>
      <div class="userInfo">
        <p class="font28 color3 inline-block">手机号码</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="19954279128" class="input font28 flo_r">
      </div>
    </div>
    <div class="addAddress text-center theme_bc">
      <div class="colorff font30">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false

    }
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mianBox{
    min-height: 100vh;
    background: #f7f7f7;
  }
  .active{
    border-top: 30px solid #f2f2f2;
    padding: 24px 30px;
    border-bottom: 1px solid #f2f2f2;
  }
  .main-info{
    background: white;
    .userInfo{
      margin-left: 30px;
      padding: 23px 0;
      padding-right: 30px;
      border-bottom: 1px solid #f2f2f2;
      overflow: hidden;
      p{width: 150px}
      .img{
        width: 16px;
        height: 26px;
        margin-left: 10px;
        margin-top: 16px;
      }
      .photo{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .input{
        margin-top: 10px;
        width: 68%;
        border: none;
        text-align: right;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }
  }
  .addAddress{
    width: 690px;
    height: 88px;
    line-height: 88px;
    border-radius: 44px;
    margin: 125px auto;
  }
</style>
