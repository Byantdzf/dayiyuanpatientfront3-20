<template>
  <div class="mianBox">
    <div class="main-address">
      <div class="addressItem">
        <p class="font28 color6 inline-block">收货人</p>
        <input type="text" placeholder="请填写收货人姓名" class="input font28" v-model="receiver">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block">手机号码</p>
        <input type="number" placeholder="请填写收货人手机号" class="input font28" v-model="mobile">
      </div>
      <div class="addressItem" @click="show = true">
        <p class="font28 color6 inline-block">所在地区</p>
        <input type="text" placeholder="省市区" class="input font28" readonly :value="address">
        <img src="@/assets/image/homeIcon/rightIcon.png" alt=""  class="icon flo_r">
      </div>
      <div class="addressItem">
        <p class="font28 color6 inline-block">详细地址</p>
        <input type="text" placeholder="街道、楼牌号" class="input font28" v-model="addr">
      </div>
      <div class="addAddress text-center theme_bc" @click="addFn">
        <div class="colorff font30">保存</div>
      </div>
      <div class="addAddress text-center  removeClass" @click="removeFn" v-if="addrId>0">
        <div class="colorRed font30">删除</div>
      </div>
    </div>
    <div class="active ff">
      <span class="font28 color6">默认地址</span>
      <van-switch v-model="checked" active-color="#00BD75" size="24px" class="flo_r" />
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }">
      <van-area :area-list="areaList" :columns-num="3" ref="myArea" title="选择地区" @change="onChange" @confirm="onConfirm" @cancel="onCancel"/>
    </van-popup>
  </div>
</template>

<script>
import https from '@/config/http.js'
import areaList from '@/assets/area/area.js'
import {Toast, Dialog} from 'vant'
export default {
  data () {
    return {
      addrId: 0, // 地址id
      checked: false,
      show: false,
      areaList,
      ddrId: 5,
      receiver: '',
      addr: '',
      mobile: '',
      commonAddr: 0,
      province: '',
      city: '',
      area: '',
      provinceId: 110000000000,
      cityId: 110100000000,
      areaId: 110101000000,
      address: ''
    }
  },
  watch: {
    checked () {
      if (this.checked) {
        this.commonAddr = 1
      } else {
        this.commonAddr = 0
      }
    }
  },
  methods: {
    // value=0改变省，1改变市，2改变区
    onChange (picker, index, value) {
      let val = picker.getValues()
      console.log(val) // 查看打印
      let areaName = ''
      for (var i = 0; i < val.length; i++) {
        areaName = areaName + (i === 0 ? '' : '/') + val[i].name
      }
      this.carmodel = areaName
    },
    // 确定选择城市
    onConfirm (val) {
      this.address = `${val[0].name}/${val[1].name}/${val[2].name}`
      this.province = val[0].name
      this.city = val[1].name
      this.area = val[2].name
      this.provinceId = `${val[0].code}000000`
      this.cityId = `${val[1].code}000000`
      this.areaId = `${val[2].code}000000`
      this.show = false // 关闭弹框
    },
    // 取消选中城市
    onCancel () {
      this.show = false
      this.$refs.myArea.reset()// 重置城市列表
    },
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    addFn () {
      let data = {
        receiver: this.receiver,
        addr: this.addr,
        mobile: this.mobile,
        commonAddr: this.commonAddr,
        province: this.province,
        city: this.city,
        area: this.area,
        provinceId: this.provinceId,
        cityId: this.cityId,
        areaId: this.areaId,
        isDefaultAddr: this.commonAddr
      }
      for (let index in data) {
        if (data[index] === '') {
          Toast.fail('请填写完整信息后保存')
        }
      }
      console.log(data)
      let url = 'address/addAddr'
      if (this.addrId > 0) {
        url = 'address/updateAddr'
        data.addrId = this.addrId
      }
      https.fetchPost(url, data).then((data) => {
        Toast.success('保存成功')
        this.gotoPage('/user/address')
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    removeFn () {
      Dialog.confirm({
        title: '温馨提示',
        message: '是否确认删除该收货地址？'
      }).then(() => {
        https.fetchGet(`address/deleteAddr?addrId=${this.addrId}`).then((data) => {
          console.log(data)
          Toast.success('删除成功')
          this.gotoPage('/user/address')
        }).catch(err => {
          console.log(err)
        })
      }).catch(() => {
        console.log('取消')
      })
    },
    getData () {
      https.fetchGet(`address/queryAddr?addrId=${this.addrId}`).then((data) => {
        console.log(data)
        this.receiver = data.receiver
        this.addr = data.addr
        this.mobile = data.mobile
        this.commonAddr = data.commonAddr
        this.province = data.province
        this.city = data.city
        this.area = data.area
        this.provinceId = data.provinceId
        this.cityId = data.cityId
        this.areaId = data.areaId
        this.address = `${data.province}/${data.city}/${data.area}`
        this.checked = data.commonAddr === 1 ? !this.checked : this.checked
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.addrId = this.$route.query.id
    if (this.addrId > 0) {
      this.getData()
    }
    console.log(areaList)
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
      .icon{
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
    .removeClass{
      bottom: 140px;
      border: 1px solid #d0d0d0;
    }
  }
</style>
