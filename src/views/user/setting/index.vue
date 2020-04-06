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
        <input type="text" placeholder="请填写姓名" v-model="userInfo.nickName" class="input font28 flo_r">
      </div>
      <div class="userInfo"   @click="show = true">
        <p class="font28 color3 inline-block">用户性别</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="请选择性别" :value="sex" class="input font28 flo_r" readonly>
      </div>
      <div class="userInfo">
        <p class="font28 color3 inline-block">用户地址</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="请输入地址" v-model="userInfo.address" class="input font28 flo_r">
      </div>
      <div class="userInfo">
        <p class="font28 color3 inline-block">手机号码</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <input type="text" placeholder="请输入手机号" v-model="userInfo.userMobile" class="input font28 flo_r">
      </div>
    </div>
    <div class="addAddress text-center theme_bc" @click="submitFn">
      <div class="colorff font30">保存</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onChange"
        @cancel="show = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      checked: false,
      userInfo: {},
      show: false,
      columns: ['男', '女'],
      sex: ''
    }
  },
  methods: {
    onChange (value) {
      this.sex = value
      this.userInfo.sex = value == '男' ? 1 : 0
      this.show = false
    },
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    getData () {
      this.$https.fetchGet('user/userDetial').then((data) => {
        console.log(data)
        this.userInfo = data
        this.sex = data.sex == 1 ? '男' : '女'
      }).catch(err => {
        console.log(err)
      })
    },
    submitFn () {
      console.log(this.userInfo)
      let data = {
        nickName: this.userInfo.nickName,
        pic: this.userInfo.pic,
        userMobile: this.userInfo.userMobile,
        sex: this.userInfo.sex,
        address: this.userInfo.address
      }
      for (let index in data) {
        console.info(data[index])
        if (!data[index]) {
          Toast.fail('请填写完整信息后保存')
          return
        }
      }
      console.log(data)
      this.$https.fetchPost(`user/setUserInfo`, data).then((data) => {
        Toast.success('保存成功')
        console.log(data)
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
  .van-picker__cancel {
    color: #999999 !important;
  }

  .van-picker__confirm {
    color: #00BD75 !important;
  }
</style>
