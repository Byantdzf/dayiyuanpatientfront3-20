<template>
  <div class="mainPage">
    <div class="main-list">
      <div class="listItem" v-for="(item,index) in list" :key="index" @click="gotoPage(`/user/addPatientsMsg?id=${item.patientId}`)">
        <div class="font28 color3 flo_l title">
          <p class="flo_l">{{item.patientName}}</p>
          <div class="active text-center font22 colorff flo_l" v-if="item.isDefault == 1">默认</div>
        </div>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="img flo_r">
        <p class="color6 font28 flo_r title">{{item.age}}岁（{{item.sex == 1?'男':'女'}}）</p>
        <p class="clearfloat"></p>
      </div>
    </div>
    <div class="addAddress text-center theme_bc" @click="gotoPage('/user/addPatientsMsg')">
      <div class="colorff font30">新增患者</div>
    </div>
  </div>
</template>

<script>
import https from '@/config/http.js'
export default {
  data () {
    return {
      text: '',
      value: '',
      showPicker: false,
      list: [],
      columns: ['测试', '测试', '测试', '测试', '测试']
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    getData () {
      https.fetchGet('patient/queryPatientList').then((data) => {
        console.log(data)
        this.list = data
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
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .mainPage{
    min-height: 100vh;
    background: #F7F7F7;
  }
  .main-list {
    background: white;

    .listItem {
      margin-left: 30px;
      padding: 24px 0;
      /*margin-top: -12px;*/
      border-bottom: 1px solid #f2f2f2;
      .title {
        margin-top: 10px;
      }
      .img {
        width: 16px;
        height: 26px;
        margin-right: 40px;
        margin-top: 16px;
        margin-left: 12px;
      }

      .input {
        margin-top: 8px;
        width: 70%;
        border: none;
      }

      .textareaStyle {
        width: 92%;
        min-height: 200px;
        border: none;
        resize: none;
      }

      input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: #b2b2b2;
      }
    }
  }
  .active {
    background: rgba(0, 189, 117, 1);
    border-radius: 22px;
    margin-left: 12px;
    padding: 2px 12px;
    border: none;
    margin-top: 4px;
  }

  .addAddress {
    width: 690px;
    height: 88px;
    position: fixed;
    bottom: 40px;
    left: 30px;
    line-height: 88px;
    border-radius: 44px;
  }

  .Image {
    margin-top: -12px;
    padding: 0px 40px 20px 40px;

    .itemImage {
      width: 120px;
      height: 120px;
      background: rgba(255, 255, 255, 1);
      border: 5px solid rgba(244, 244, 244, 1);
    }
  }

  .van-picker__cancel {
    color: #999999;
  }

  .van-picker__confirm {
    color: #00BD75;
  }
</style>
