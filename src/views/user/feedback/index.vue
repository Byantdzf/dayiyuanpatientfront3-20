<template>
  <div>
    <div class="main-address">
      <div class="addressItem" @click="showPicker = true">
        <p class="font28 color6 flo_l">请选择问题分类</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <p class="color9 font28 flo_r">{{value}}</p>
        <p class="clearfloat"></p>
      </div>
      <div class="addressItem noBorder">
        <textarea class="textareaStyle font28 color6" v-model="text" maxlength="10" placeholder="请描述您的问题，我们收到您的反馈后会尽快解决"></textarea>
        <p class="color9 font28">{{text.length}}/100</p>
      </div>
      <div class="Image">
        <div class="itemImage text-center">
          <img src="@/assets/image/userIcon/addIcon.png" alt="">
        </div>
<!--        <img src="" alt="" class="itemImage">-->
      </div>
      <div class="addAddress text-center theme_bc">
        <div class="colorff font30">提交</div>
      </div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <div class="active ff">
      <span class="font28 color6">手机号（选填）</span>
<!--      <van-switch v-model="checked" active-color="#00BD75" size="24px" class="flo_r" />-->
      <input type="text" placeholder="请输入" class="input text-right font28 flo_r">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      value: '',
      showPicker: false,
      columns: ['测试', '测试', '测试', '测试', '测试']
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>
<style lang="less">
  @import '../../../../src/assets/style/reset';
  body{
    background:rgba(247,247,247,1);
  }
  .active{
    border-top: 20px solid #f2f2f2;
    padding: 32px 40px;
    border-bottom: 1px solid #f2f2f2;
    .input{
      width: 70%;
      border: none;
      margin-top: 4px;
    }
    input::-webkit-input-placeholder {
      color: #999999;
    }
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 40px;
      padding: 36px 0;
      margin-top: -12px;
      border-bottom: 1px solid #f2f2f2;
      p{margin-top: 10px;}
      .img{
        width: 16px;
        height: 26px;
        margin-right: 40px;
        margin-top: 16px;
        margin-left: 12px;
      }
      .input{
        margin-top: 8px;
        width: 70%;
        border: none;
      }
      .textareaStyle{
        width: 92%;
        min-height: 200px;
        border: none;
        resize:none;
      }
      input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
        color: #b2b2b2;
      }
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
  .Image{
    margin-top: -12px;
    padding: 0px 40px 20px 40px;
    .itemImage{
      width:120px;
      height:120px;
      background:rgba(255,255,255,1);
      border:5px solid rgba(244,244,244,1);
      img{
        width: 48px;
        height: 48px;
        margin-top: 34px;
      }
    }
  }
  .van-picker__cancel{
    color: #999999;
  }
  .van-picker__confirm{
    color: #00BD75;
  }
</style>
