<template>
  <div class="mianBox_addPatientsMsg">
    <div class="main-address">
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>姓名</p>
        <input type="text" placeholder="请填写姓名" class="input font28 flo_r" v-model="patientName">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>身份证</p>
        <input type="text" placeholder="请输入有效证件" class="input font28 flo_r">
      </div>
      <div class="addressItem"  @click="show = true">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>性别</p>
        <img src="@/assets/image/homeIcon/rightIcon.png" alt="" class="icon flo_r">
        <input type="text" placeholder="请选择性别" class="input font28 flo_r" readonly :value="sex">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block"><span class="colorRed">*</span>年龄</p>
        <input type="text" placeholder="请输入年龄" class="input font28 flo_r" v-model="age">
      </div>
      <div class="addAddress text-center theme_bc" @click="addFn">
        <div class="colorff font30">保存</div>
      </div>

      <div class="addAddress text-center removeClass" @click="removeFn" v-if="patientId > 0">
        <div class="colorRed font30">删除</div>
      </div>
    </div>
    <div class="active ff">
      <span class="font28 color6">设为默认患者</span>
      <van-switch v-model="checked" active-color="#00BD75" size="24px" class="flo_r" />
      <!--      <input type="text" placeholder="请填写收货人姓名" class="input font14">-->
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

<script>import {Toast, Dialog} from 'vant'
export default {
  data () {
    return {
      patientId: 0,
      checked: false,
      show: false,
      columns: ['男', '女'],
      patientName: '',
      sex: '',
      sexCode: 0,
      age: '',
      isDefault: 0,
      createTime: '',
      userId: ''
    }
  },
  watch: {
    checked () {
      if (this.checked) {
        this.isDefault = 1
      } else {
        this.isDefault = 0
      }
    },
    sexCode () {
      console.log(this.sexCode)
      this.sex = this.sexCode == 1 ? '男' : '女'
    }
  },
  methods: {
    onChange (value) {
      this.sex = value
      this.sexCode = value == '男' ? 1 : 0
      this.show = false
    },
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    addFn () {
      let data = {
        patientName: this.patientName,
        sex: this.sexCode,
        age: this.age
      }
      for (let index in data) {
        console.info(data[index])
        if (!data[index]) {
          Toast.fail('请填写完整信息后保存')
          return
        }
      }
      data.isDefault = this.isDefault
      console.log(data)
      let url = 'patient/saveOrUpdatePatient'
      if (this.patientId > 0) {
        url = 'patient/saveOrUpdatePatient'
        data.patientId = this.patientId
      }
      this.$https.fetchPost(url, data).then((data) => {
        Toast.success('保存成功')
        this.gotoPage('/user/patientsMsg')
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    removeFn () {
      Dialog.confirm({
        title: '温馨提示',
        message: '是否确认删除该患者信息？'
      }).then(() => {
        this.$https.fetchGet(`patient/removePatient?patientId=${this.patientId}`).then((data) => {
          console.log(data)
          Toast.success('删除成功')
          this.gotoPage('/user/patientsMsg')
        }).catch(err => {
          console.log(err)
        })
      }).catch(() => {
        console.log('取消')
      })
    },
    getData () {
      this.$https.fetchGet(`patient/queryPatientById?patientId=${this.patientId}`).then((data) => {
        console.log(data)
        this.patientId = data.patientId
        this.patientName = data.patientName
        this.sexCode = data.sex
        this.sex = data.sex == 1 ? '男' : '女'
        this.age = data.age
        this.isDefault = data.isDefault
        this.checked = data.isDefault == 1 ? !this.checked : this.checked
        this.createTime = data.createTime
        this.userId = data.userId
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.patientId = this.$route.query.id
    if (this.patientId > 0) {
      this.getData()
    }
  }
}

</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped="scoped">
  @import '../../../../src/assets/style/reset';
  .mianBox_addPatientsMsg{
    min-height: 100vh;
    background: #F2F2F2;
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
        .icon{
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
      .removeClass{
        bottom: 140px;
        border: 1px solid #d0d0d0;
      }
    }
  }
  .van-picker__cancel {
    color: #999999 !important;
  }

  .van-picker__confirm {
    color: #00BD75 !important;
  }

</style>
