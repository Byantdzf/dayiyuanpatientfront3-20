<template>
  <div class="mianBox">
    <div class="mainList">
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>患者姓名：</p>
        <input type="text" placeholder="请填写患者姓名" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>患者性别：</p>
        <input type="text" placeholder="男" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>患者年龄：</p>
        <input type="text" placeholder="请输入患者年龄" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>接诊时间：</p>
        <input type="text" placeholder="请输入接诊时间" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>接诊机构：</p>
        <input type="text" placeholder="请输入接诊机构" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>接诊医生：</p>
        <input type="text" placeholder="请输入接诊医生" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed"></span>西医诊断：</p>
        <input type="text" placeholder="请输入医生诊断" class="input font28">
      </div>
      <div class="listItem">
        <p class="font28 color6 inline-block"><span class="colorRed"></span>中医诊断：</p>
        <input type="text" placeholder="请输入医生诊断" class="input font28">
      </div>
    </div>
    <div class="mainList mainBox">
      <div class="listItem">
        <p class="font28 color6 inline-block">医生嘱托</p>
        <textarea class="textareaStyle font28 color6" v-model="text" maxlength="10" placeholder="请输入医生嘱托"></textarea>
      </div>
    </div>
    <div class="mainList mainBox">
      <div class="listItem">
        <p class="font28 color6 inline-block">添加报告</p>
        <img src="@/assets/image/userIcon/issueIcon.png" alt="">
      </div>
      <div class="uploadBox text-center">
        <img src="@/assets/image/userIcon/addIcon.png" alt="">
        <p class="font26 color6 text-center">检查报告</p>
      </div>
      <div class="uploadBox text-center">
        <img src="@/assets/image/userIcon/addIcon.png" alt="">
        <p class="font26 color6 text-center">检查报告</p>
      </div>
<!--      <p style="height: 2px;"></p>-->
    </div>
    <div class="mainList mainBox">
      <div class="listItem">
        <p class="font28 color6 inline-block">添加处方</p>
        <img src="@/assets/image/userIcon/issueIcon.png" alt="">
      </div>
      <div class="uploadBox text-center">
        <img src="@/assets/image/userIcon/addIcon.png" alt="">
        <p class="font26 color6 text-center">中医处方</p>
      </div>
      <div class="uploadBox text-center">
        <img src="@/assets/image/userIcon/addIcon.png" alt="">
        <p class="font26 color6 text-center">西医处方</p>
      </div>
    </div>
    <p style="height: 120px;"></p>
    <div class="addFn text-center theme_bc">
      <div class="colorff font30">保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      checked: false
    }
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mianBox{
    /*min-height: 100vh;*/
    background: #F2F2F2;
  }
  .active{
    border-top: 30px solid #f2f2f2;
    padding: 24px 30px;
    border-bottom: 1px solid #f2f2f2;
  }
  .mainList{
    background: white;
    .listItem{
      margin-left: 30px;
      padding: 23px 0;
      padding-right: 30px;
      border-bottom: 1px solid #f2f2f2;
      p{
        width: 200px;
      }
      .img{
        width: 16px;
        height: 26px;
        margin-left: 8px;
        margin-top: 16px;
      }
      .input{
        margin-top: 8px;
        width: 66%;
        border: none;
        text-align: left;
      }
      input::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }
  }
  .textareaStyle{
    width: 102%;
    margin-top: 24px;
    min-height: 160px;
    border: none;
    resize:none;
    padding-top: 30px;
    padding-left: 10px;
    border-top: 1px solid #e7e7e7;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    color: #b2b2b2;
  }
  .mainBox{
    margin-top: 20px;
    overflow: hidden;
    .listItem{
      img{
        width: 32px;
        height: 32px;
        margin-left: -80px;
        margin-bottom: -6px;
      }
    }
    .uploadBox{
      width: 160px;
      height: 160px;
      border:5px solid rgba(244,244,244,1);
      margin: 30px 36px;
      img{
        width: 48px;
        height: 48px;
        margin-top: 56px;
      }
    }
  }
  .addFn{
    width: 690px;
    height: 88px;
    position: fixed;
    bottom: 40px;
    left: 30px;
    line-height: 88px;
    border-radius: 44px;
  }
</style>
